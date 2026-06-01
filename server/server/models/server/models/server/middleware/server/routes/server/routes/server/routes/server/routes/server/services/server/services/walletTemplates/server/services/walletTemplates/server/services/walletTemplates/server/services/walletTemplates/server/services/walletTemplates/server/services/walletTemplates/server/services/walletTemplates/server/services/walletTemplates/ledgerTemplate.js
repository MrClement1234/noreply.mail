module.exports = (data) => {
  const { transactionType, amount, currency, toAddress, fromAddress, transactionHash, timestamp, userName } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ledger Live Transaction Receipt</title>
      <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f5f7; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; }
        .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; color: #fff; }
        .header p { margin: 10px 0 0 0; font-size: 14px; color: #aaa; }
        .logo { font-size: 40px; margin-bottom: 10px; }
        .content { padding: 40px; }
        .status { background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 16px; border-radius: 8px; margin-bottom: 24px; }
        .status-text { color: #2e7d32; font-weight: 600; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
        .detail-label { color: #555; font-weight: 500; }
        .detail-value { color: #000; font-weight: 600; word-break: break-all; text-align: right; flex: 1; margin-left: 10px; font-family: 'Courier New', monospace; font-size: 12px; }
        .amount-box { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 28px; border-radius: 8px; margin: 24px 0; text-align: center; color: #fff; }
        .amount-text { font-size: 32px; font-weight: 700; margin: 10px 0; }
        .currency-text { font-size: 14px; color: #aaa; font-weight: 500; }
        .footer { background-color: #f8f9fa; padding: 24px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
        .button { background: #1a1a1a; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block; margin: 24px 0; }
        h2 { color: #1a1a1a; font-size: 20px; font-weight: 600; }
        p { color: #555; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🔐</div>
          <h1>Ledger Live</h1>
          <p>Hardware Wallet Transaction Receipt</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userName || 'User'},</h2>
          <p>Your ${transactionType} transaction via Ledger Live has been confirmed.</p>
          
          <div class="status">
            <div class="status-text">✓ Verified & Confirmed</div>
          </div>
          
          <div class="amount-box">
            <div class="currency-text">Amount</div>
            <div class="amount-text">${amount} ${currency}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Operation:</div>
            <div class="detail-value">${transactionType}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">From:</div>
            <div class="detail-value">${fromAddress.substring(0, 12)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">To:</div>
            <div class="detail-value">${toAddress.substring(0, 12)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">TxID:</div>
            <div class="detail-value">${transactionHash.substring(0, 12)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Date:</div>
            <div class="detail-value">${new Date(timestamp).toLocaleString()}</div>
          </div>
          
          <a href="https://ledger.com" class="button">Open Ledger Live</a>
        </div>
        
        <div class="footer">
          <p>Your hardware wallet transaction has been securely processed.</p>
          <p>&copy; 2024 Mock Trading Platform.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
