module.exports = (data) => {
  const { transactionType, amount, currency, toAddress, fromAddress, transactionHash, timestamp, userName } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exodus Wallet Transaction Receipt</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #222; border-radius: 16px; box-shadow: 0 8px 32px rgba(100, 200, 255, 0.15); overflow: hidden; border: 1px solid rgba(100, 200, 255, 0.2); }
        .header { background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; color: #000; }
        .header p { margin: 10px 0 0 0; font-size: 14px; color: rgba(0,0,0,0.8); }
        .logo { font-size: 50px; margin-bottom: 10px; }
        .content { padding: 40px; }
        .status { background-color: rgba(76, 175, 80, 0.15); border-left: 4px solid #4caf50; padding: 16px; border-radius: 8px; margin-bottom: 24px; }
        .status-text { color: #4caf50; font-weight: 700; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 14px; }
        .detail-label { color: #aaa; font-weight: 500; }
        .detail-value { color: #fff; font-weight: 600; word-break: break-all; text-align: right; flex: 1; margin-left: 10px; font-family: monospace; font-size: 12px; }
        .amount-box { background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); padding: 28px; border-radius: 12px; margin: 24px 0; text-align: center; color: #000; }
        .amount-text { font-size: 32px; font-weight: 700; margin: 10px 0; }
        .currency-text { font-size: 14px; opacity: 0.95; font-weight: 500; }
        .footer { background-color: rgba(0,0,0,0.3); padding: 24px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid rgba(255,255,255,0.1); }
        .button { background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: #000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; margin: 24px 0; }
        h2 { color: #fff; font-size: 20px; font-weight: 600; }
        p { color: #aaa; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">💰</div>
          <h1>Exodus</h1>
          <p>Multi-Asset Wallet Transaction Receipt</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userName || 'User'},</h2>
          <p>Your ${transactionType} transaction has been successfully processed.</p>
          
          <div class="status">
            <div class="status-text">✓ Transaction Confirmed</div>
          </div>
          
          <div class="amount-box">
            <div class="currency-text">Amount</div>
            <div class="amount-text">${amount} ${currency}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Transaction Type:</div>
            <div class="detail-value">${transactionType}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">From Address:</div>
            <div class="detail-value">${fromAddress.substring(0, 15)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">To Address:</div>
            <div class="detail-value">${toAddress.substring(0, 15)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Transaction Hash:</div>
            <div class="detail-value">${transactionHash.substring(0, 15)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Timestamp:</div>
            <div class="detail-value">${new Date(timestamp).toLocaleString()}</div>
          </div>
          
          <a href="https://exodus.com" class="button">View in Exodus</a>
        </div>
        
        <div class="footer">
          <p>Multi-asset portfolio transaction confirmed.</p>
          <p>&copy; 2024 Mock Trading Platform.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
