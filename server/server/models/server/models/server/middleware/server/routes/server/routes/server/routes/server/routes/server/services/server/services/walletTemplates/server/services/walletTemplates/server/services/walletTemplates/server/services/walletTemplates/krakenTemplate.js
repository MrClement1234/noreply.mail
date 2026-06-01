module.exports = (data) => {
  const { transactionType, amount, currency, toAddress, fromAddress, transactionHash, timestamp, userName } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Kraken Transaction Receipt</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f8f8; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background: #000; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; color: #fff; }
        .header p { margin: 10px 0 0 0; font-size: 14px; color: #aaa; }
        .logo { font-size: 40px; margin-bottom: 10px; }
        .content { padding: 30px; }
        .status { background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 15px; border-radius: 4px; margin-bottom: 20px; }
        .status-text { color: #10b981; font-weight: 600; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; }
        .detail-label { color: #666; font-weight: 500; }
        .detail-value { color: #000; font-weight: 600; word-break: break-all; text-align: right; flex: 1; margin-left: 10px; }
        .amount-box { background: #f8f8f8; padding: 20px; border-radius: 4px; margin: 20px 0; text-align: center; border: 1px solid #eee; }
        .amount-text { font-size: 28px; font-weight: 700; margin: 10px 0; color: #000; }
        .currency-text { font-size: 14px; color: #666; }
        .footer { background-color: #f8f8f8; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
        .button { background: #000; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; margin: 20px 0; }
        h2 { color: #000; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🦑</div>
          <h1>Kraken</h1>
          <p>Transaction Receipt</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userName || 'User'},</h2>
          <p>Your ${transactionType} transaction has been processed on Kraken.</p>
          
          <div class="status">
            <div class="status-text">✓ Confirmed</div>
          </div>
          
          <div class="amount-box">
            <div class="currency-text">Amount</div>
            <div class="amount-text">${amount} ${currency}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Type:</div>
            <div class="detail-value">${transactionType}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">From:</div>
            <div class="detail-value">${fromAddress.substring(0, 20)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">To:</div>
            <div class="detail-value">${toAddress.substring(0, 20)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Hash:</div>
            <div class="detail-value">${transactionHash.substring(0, 20)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Date:</div>
            <div class="detail-value">${new Date(timestamp).toLocaleString()}</div>
          </div>
          
          <a href="https://kraken.com" class="button">View on Kraken</a>
        </div>
        
        <div class="footer">
          <p>Automated email from Mock Trading Platform</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
