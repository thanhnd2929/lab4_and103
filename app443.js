const { error } = require('console');
const express = require('express');
const mailer = require('nodemailer');

const app43 = express();

let transpoter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thanhndph45160@fpt.edu.vn',
        pass: 'cqgn kunn gqll vpej'
    }
})

let mailOption = {
    from : 'thanhndph45160@fpt.edu.vn',
    to: 'thanhnd2412@gmail.com',
    subject: 'mail gui testttttt',
    text: 'mail test 17/7'
}


transpoter.sendMail(mailOption, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log('thanh cong', info.messageId);
    }
})

app43.listen(3002, () => {
    console.log('server chay cong 3002');
})