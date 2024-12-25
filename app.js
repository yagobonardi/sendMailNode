require('dotenv').config();
const sendMail = require('./sendmail');

sendMail(process.env.MAIL_TO, 'Enviando email utilizando nodejs', 'Msg teste!')
    .then(response => {
        console.log('Email enviado com sucesso:', response);
    })
    .catch(error => {
        console.error('Erro ao enviar e-mail:', error);
    });
