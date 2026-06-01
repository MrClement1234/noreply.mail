const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const transactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    default: () => '0x' + uuidv4().replace(/-/g, '').slice(0, 64),
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['send', 'deposit', 'receive', 'swap'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'failed'],
    default: 'pending'
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'BTC',
    enum: ['BTC', 'ETH', 'USDT', 'USDC', 'BNB', 'SOL', 'ADA', 'DOT', 'XRP', 'LINK']
  },
  fromAddress: {
    type: String,
    required: true
  },
  toAddress: {
    type: String,
    required: true
  },
  network: {
    type: String,
    default: 'Mainnet',
    enum: ['Mainnet', 'Testnet', 'L2']
  },
  networkName: {
    type: String,
    default: 'Ethereum',
    enum: ['Ethereum', 'Bitcoin', 'Solana', 'Binance Smart Chain', 'Polygon', 'Arbitrum']
  },
  fee: {
    type: Number,
    default: 0.001
  },
  feeToken: {
    type: String,
    default: 'ETH'
  },
  confirmations: {
    type: Number,
    default: 0
  },
  description: String,
  walletUsed: {
    type: String,
    default: 'binance',
    enum: ['binance', 'bybit', 'kraken', 'coinbase', 'metamask', 'trustwallet', 
            'ledger', 'trezor', 'phantom', 'exodus', 'raydium', 'magiceden', 
            'solflare', 'rainbow', 'imtoken', 'argent', 'loopring', 'walletconnect',
            'atomic', 'kucoin', 'gateo', 'okx', 'huobi']
  },
  emailSent: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  confirmedAt: Date
});

module.exports = mongoose.model('Transaction', transactionSchema);
