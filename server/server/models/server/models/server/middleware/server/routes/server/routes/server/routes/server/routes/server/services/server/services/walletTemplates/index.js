const binanceTemplate = require('./binanceTemplate');
const bybitTemplate = require('./bybitTemplate');
const krakenTemplate = require('./krakenTemplate');
const coinbaseTemplate = require('./coinbaseTemplate');
const metamaskTemplate = require('./metamaskTemplate');
const trustwalletTemplate = require('./trustwalletTemplate');
const ledgerTemplate = require('./ledgerTemplate');
const trezorTemplate = require('./trezorTemplate');
const phantomTemplate = require('./phantomTemplate');
const exodusTemplate = require('./exodusTemplate');
const raydiumTemplate = require('./raydiumTemplate');
const safepalTemplate = require('./safepalTemplate');
const tronlinkTemplate = require('./tronlinkTemplate');
const coindexTemplate = require('./coindexTemplate');
const bitgetTemplate = require('./bitgetTemplate');
const bitpayTemplate = require('./bitpayTemplate');

module.exports = {
  binance: binanceTemplate,
  bybit: bybitTemplate,
  kraken: krakenTemplate,
  coinbase: coinbaseTemplate,
  metamask: metamaskTemplate,
  trustwallet: trustwalletTemplate,
  ledger: ledgerTemplate,
  trezor: trezorTemplate,
  phantom: phantomTemplate,
  exodus: exodusTemplate,
  raydium: raydiumTemplate,
  safepal: safepalTemplate,
  tronlink: tronlinkTemplate,
  coindex: coindexTemplate,
  bitget: bitgetTemplate,
  bitpay: bitpayTemplate
};
