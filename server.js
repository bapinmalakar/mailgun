const express = require('express');
const mailgun = require('mailgun-js');
const mailer = require('./mailgun');
const app = express();
const mailgunInit = mailgun({ apiKey: 'key-8ac753c5c37eb8b3db9f0b9d6263b9cb', domain: 'sandbox7d21574df5904e67a286e97a30ddfddb.mailgun.org' })
app.get('/api/email/:email/send', async (req, res) => {
    try {
        let rex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (rex.test(req.params.email)){
            await mailer(req.params.email, mailgunInit);
            res.status(200).send('Mail Send Done');
        }
        else
            res.status(422).send('Invalid Email Address');
    }
    catch (err) {
        console.log('Error Is::: ', err);
        res.status(500).send("Mail Can't be send due to some error! Try again");
    }

})
app.listen(8000, () => console.log('Server Is Running On Port 8000'));