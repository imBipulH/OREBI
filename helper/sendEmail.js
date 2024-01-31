const nodemailer = require('nodemailer');

async function sendmail(email, subject, emailTemplate){
    const transporter  =  nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "bipulh62@gmail.com",
            pass: "vqak ugga xmop anxl"
        }
    })

    const info = await transporter.sendMail({
        from: '"Orebi" bipulh62@gmail.com',
        to: email,
        subject: subject,
        text: "Hello world?",
        html: emailTemplate
    })
}
module.exports = sendmail;