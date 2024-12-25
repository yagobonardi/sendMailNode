var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS
    }
});

function sendMail(to, subject, text) {
    var mailOptions = {
        from: process.env.MAIL_FROM,
        to,
        subject,
        text,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
            } else {
                resolve(info.response);
            }
        });
    });
}

module.exports = sendMail;
