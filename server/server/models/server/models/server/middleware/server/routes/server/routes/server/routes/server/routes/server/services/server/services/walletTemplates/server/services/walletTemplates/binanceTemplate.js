module.exports = (data) => {
  const { transactionType, amount, currency, toAddress, fromAddress, transactionHash, timestamp, userName } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Binance Transaction Receipt</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background: linear-gradient(135deg, #F3BA2F 0%, #FCC00E 100%); padding: 30px; text-align: center; color: #000; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
        .header p { margin: 10px 0 0 0; font-size: 14px; opacity: 0.8; }
        .logo { font-size: 40px; margin-bottom: 10px; }
        .content { padding: 30px; }
        .status { background-color: #f0f9ff; border-left: 4px solid #0f766e; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
        .status-text { color: #0f766e; font-weight: 600; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid #eee; font-size: 14px; }
        .detail-label { color: #666; font-weight: 500; }
        .detail-value { color: #000; font-weight: 600; word-break: break-all; }
        .amount-box { background: linear-gradient(135deg, #F3BA2F 0%, #FCC00E 100%); padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; color: #000; }
        .amount-text { font-size: 28px; font-weight: 700; margin: 10px 0; }
        .currency-text { font-size: 14px; opacity: 0.8; }
        .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
        .button { background: linear-gradient(135deg, #F3BA2F 0%, #FCC00E 100%); color: #000; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🏦</div>
          <h1>Binance</h1>
          <p>Transaction Receipt</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userName || 'User'},</h2>
          <p>Your ${transactionType} transaction has been confirmed.</p>
          
          <div class="status">
            <div class="status-text">✓ Transaction Confirmed</div>
          </div>
          
          <div class="amount-box">
            <div class="currency-text">Amount</div>
            <div class="amount-text">${amount} ${currency}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Transaction Type:</div>
            <div class="detail-value">${transactionType === 'send' ? 'Send' : 'Receive'}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">From Address:</div>
            <div class="detail-value">${fromAddress.substring(0, 10)}...${fromAddress.substring(fromAddress.length - 10)}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">To Address:</div>
            <div class="detail-value">${toAddress.substring(0, 10)}...${toAddress.substring(toAddress.length - 10)}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Transaction Hash:</div>
            <div class="detail-value">${transactionHash.substring(0, 10)}...${transactionHash.substring(transactionHash.length - 10)}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Timestamp:</div>
            <div class="detail-value">${new Date(timestamp).toLocaleString()}</div>
          </div>
          
          <a href="https://binance.com" class="button">View on Binance</a>
        </div>
        
        <div class="footer">
          <p>This is an automated email. Please do not reply to this message.</p>
          <p>&copy; 2024 Mock Trading Platform. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
