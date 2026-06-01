const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');
const auth = require('../middleware/auth');

// Get portfolio
router.get('/', auth, async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ userId: req.userId });

    if (!portfolio) {
      portfolio = new Portfolio({
        userId: req.userId,
        assets: [
          { symbol: 'BTC', amount: 0.5, currentPrice: 45000, totalValue: 22500, percentageChange24h: 2.5 },
          { symbol: 'ETH', amount: 5, currentPrice: 2500, totalValue: 12500, percentageChange24h: 1.8 },
          { symbol: 'USDT', amount: 5000, currentPrice: 1, totalValue: 5000, percentageChange24h: 0 }
        ]
      });
      await portfolio.save();
    }

    res.json({ portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get balance
router.get('/balance', auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ userId: req.userId });

    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.json({
      totalBalance: portfolio.totalBalance,
      totalInUSD: portfolio.totalInUSD,
      percentageChange24h: portfolio.percentageChange24h,
      assetsCount: portfolio.assets.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update portfolio
router.put('/update', auth, async (req, res) => {
  try {
    const { assets, totalBalance } = req.body;

    const portfolio = await Portfolio.findOneAndUpdate(
      { userId: req.userId },
      {
        assets: assets || undefined,
        totalBalance: totalBalance || undefined,
        updatedAt: new Date()
      },
      { new: true }
    );

    res.json({ message: 'Portfolio updated', portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
