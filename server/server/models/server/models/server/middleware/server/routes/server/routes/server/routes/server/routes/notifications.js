const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const emailService = require('../services/emailService');

// Send test email
router.post('/test-email', auth, async (req, res) => {
  try {
    const { email, walletTemplate } = req.body;

    const emailData = {
      to: email || 'test@example.com',
      transactionType: 'send',
      amount: 0.5,
      currency: 'ETH',
      toAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f42bE',
      fromAddress: '0x1234567890123456789012345678901234567890',
      transactionHash: '0xtest123456789',
      timestamp: new Date().toISOString(),
      walletTemplate: walletTemplate || 'binance',
      userName: 'Test User'
    };

    await emailService.sendTransactionReceipt(emailData);

    res.json({ message: 'Test email sent successfully' });
  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'Email service OK' });
});

module.exports = router;
