const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  walletAddress: {
    type: String,
    default: () => '0x' + Math.random().toString(16).slice(2, 42)
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  preferredWallet: {
    type: String,
    default: 'binance',
    enum: ['binance', 'bybit', 'kraken', 'coinbase', 'metamask', 'trustwallet', 
            'ledger', 'trezor', 'phantom', 'exodus', 'raydium', 'magiceden', 
            'solflare', 'rainbow', 'imtoken', 'argent', 'loopring', 'walletconnect',
            'atomic', 'kucoin', 'gateo', 'okx', 'huobi']
  },
  theme: {
    type: String,
    default: 'dark',
    enum: ['light', 'dark']
  },
  notificationPreferences: {
    emailNotifications: { type: Boolean, default: true },
    pushNotifications: { type: Boolean, default: true },
    emailReceipts: { type: Boolean, default: true }
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

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
