module.exports = (data) => {
  const { transactionType, amount, currency, toAddress, fromAddress, transactionHash, timestamp, userName } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Coinbase Transaction Receipt</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f5f7f9; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden; }
        .header { background: linear-gradient(135deg, #0052ff 0%, #0066ff 100%); padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; color: #fff; }
        .header p { margin: 10px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.9); }
        .logo { font-size: 40px; margin-bottom: 10px; }
        .content { padding: 40px; }
        .status { background-color: #e6f7f0; border-left: 4px solid #00a862; padding: 16px; border-radius: 6px; margin-bottom: 24px; }
        .status-text { color: #00a862; font-weight: 600; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
        .detail-label { color: #5b616e; font-weight: 500; }
        .detail-value { color: #0f0f0f; font-weight: 600; word-break: break-all; text-align: right; flex: 1; margin-left: 10px; }
        .amount-box { background: linear-gradient(135deg, #0052ff 0%, #0066ff 100%); padding: 24px; border-radius: 8px; margin: 24px 0; text-align: center; }
        .amount-text { font-size: 28px; font-weight: 700; margin: 10px 0; color: #fff; }
        .currency-text { font-size: 14px; color: rgba(255,255,255,0.9); }
        .footer { background-color: #f8f9fa; padding: 24px; text-align: center; font-size: 12px; color: #8a8d97; border-top: 1px solid #f0f0f0; }
        .button { background: linear-gradient(135deg, #0052ff 0%, #0066ff 100%); color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block; margin: 24px 0; }
        h2 { color: #0f0f0f; font-size: 20px; }
        p { color: #5b616e; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">💳</div>
          <h1>Coinbase</h1>
          <p>Transaction Receipt</p>
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
            <div class="detail-value">${transactionType === 'send' ? 'Send' : 'Receive'}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">From Address:</div>
            <div class="detail-value">${fromAddress.substring(0, 12)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">To Address:</div>
            <div class="detail-value">${toAddress.substring(0, 12)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Transaction ID:</div>
            <div class="detail-value">${transactionHash.substring(0, 12)}...</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Timestamp:</div>
            <div class="detail-value">${new Date(timestamp).toLocaleString()}</div>
          </div>
          
          <a href="https://coinbase.com" class="button">View on Coinbase</a>
        </div>
        
        <div class="footer">
          <p>This is an automated email. Do not reply to this message.</p>
          <p>&copy; 2024 Mock Trading Platform. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
