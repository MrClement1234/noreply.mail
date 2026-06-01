const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  assets: [
    {
      symbol: {
        type: String,
        enum: ['BTC', 'ETH', 'USDT', 'USDC', 'BNB', 'SOL', 'ADA', 'DOT', 'XRP', 'LINK']
      },
      amount: Number,
      currentPrice: Number,
      totalValue: Number,
      percentageChange24h: Number
    }
  ],
  totalBalance: {
    type: Number,
    default: 10000
  },
  totalInUSD: {
    type: Number,
    default: 10000
  },
  percentageChange24h: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
