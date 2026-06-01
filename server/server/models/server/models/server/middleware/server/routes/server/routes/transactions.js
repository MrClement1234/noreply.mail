const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const Portfolio = require('../models/Portfolio');
const auth = require('../middleware/auth');
const emailService = require('../services/emailService');

// Create send transaction
router.post('/send', auth, async (req, res) => {
  try {
    const { amount, toAddress, currency, description } = req.body;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create transaction
    const transaction = new Transaction({
      userId: req.userId,
      type: 'send',
      amount,
      currency: currency || 'ETH',
      fromAddress: user.walletAddress,
      toAddress,
      description: description || 'Mock send transaction',
      walletUsed: user.preferredWallet,
      status: 'confirmed',
      confirmations: 1
    });

    await transaction.save();

    // Send email receipt
    if (user.notificationPreferences.emailReceipts) {
      const emailData = {
        to: user.email,
        transactionType: 'send',
        amount,
        currency,
        toAddress,
        fromAddress: user.walletAddress,
        transactionHash: transaction.transactionId,
        timestamp: new Date().toISOString(),
        walletTemplate: user.preferredWallet,
        userName: user.firstName || user.username
      };

      await emailService.sendTransactionReceipt(emailData);
    }

    // Emit socket notification
    if (req.io) {
      req.io.to(`wallet-${user.walletAddress}`).emit('transaction', {
        type: 'send',
        amount,
        currency,
        status: 'confirmed',
        timestamp: new Date()
      });
    }

    res.status(201).json({
      message: 'Transaction created and email sent',
      transaction,
      emailSent: true
    });
  } catch (error) {
    console.error('Send error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create deposit transaction
router.post('/deposit', auth, async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create transaction
    const transaction = new Transaction({
      userId: req.userId,
      type: 'deposit',
      amount,
      currency: currency || 'ETH',
      fromAddress: '0xDepositAddress123456789...',
      toAddress: user.walletAddress,
      description: 'Mock deposit transaction',
      walletUsed: user.preferredWallet,
      status: 'confirmed',
      confirmations: 12
    });

    await transaction.save();

    // Update portfolio
    const portfolio = await Portfolio.findOne({ userId: req.userId });
    if (portfolio) {
      portfolio.totalBalance += amount * 2500;
      portfolio.totalInUSD += amount * 2500;
      portfolio.updatedAt = new Date();
      await portfolio.save();
    }

    // Send email receipt
    if (user.notificationPreferences.emailReceipts) {
      const emailData = {
        to: user.email,
        transactionType: 'deposit',
        amount,
        currency,
        toAddress: user.walletAddress,
        fromAddress: '0xDepositAddress...',
        transactionHash: transaction.transactionId,
        timestamp: new Date().toISOString(),
        walletTemplate: user.preferredWallet,
        userName: user.firstName || user.username
      };

      await emailService.sendTransactionReceipt(emailData);
    }

    // Emit socket notification
    if (req.io) {
      req.io.to(`wallet-${user.walletAddress}`).emit('transaction', {
        type: 'deposit',
        amount,
        currency,
        status: 'confirmed',
        timestamp: new Date()
      });
    }

    res.status(201).json({
      message: 'Deposit created and email sent',
      transaction,
      emailSent: true
    });
  } catch (error) {
    console.error('Deposit error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all transactions
router.get('/history', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      count: transactions.length,
      transactions
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get transaction by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({ transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
