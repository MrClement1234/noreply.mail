const nodemailer = require('nodemailer');
const walletTemplates = require('./walletTemplates');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendTransactionReceipt = async (emailData) => {
  try {
    const {
      to,
      transactionType,
      amount,
      currency,
      toAddress,
      fromAddress,
      transactionHash,
      timestamp,
      walletTemplate,
      userName
    } = emailData;

    // Get wallet template
    const template = walletTemplates[walletTemplate] || walletTemplates.binance;
    const htmlContent = template({
      transactionType,
      amount,
      currency,
      toAddress,
      fromAddress,
      transactionHash,
      timestamp,
      userName
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL || process.env.EMAIL_USER,
      to,
      subject: `${transactionType === 'send' ? 'Send' : 'Deposit'} Confirmation - ${amount} ${currency}`,
      html: htmlContent
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}`);
    return result;
  } catch (error) {
    console.error('❌ Email error:', error);
    throw error;
  }
};

const sendAlertEmail = async (to, alert) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Price Alert Notification',
      html: `
        <h2>Price Alert</h2>
        <p>${alert.message}</p>
        <p>Price: $${alert.price}</p>
      `
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Alert email error:', error);
    throw error;
  }
};

module.exports = {
  sendTransactionReceipt,
  sendAlertEmail,
  transporter
};
