const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const { error, info } = require('console');
const dotenv = require('dotenv').config()


const app = express();
const server = process.env.PORT;
const port = "3000";

// set template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 


app.use(express.static(__dirname + '/public'));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post("/", (req, res)=> {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.MAIL}`, //.env file
            pass: `${process.env.PWORD}`, //.env file
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: `${process.env.MAIL}`,
        subject: `Message from ${req.body.email}:  ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
            console.log(error);
            res.send(error);
        }else{
            console.log('Email sent to ' + info.response);
            res.send('success');
        }
    })
})



app.listen(server || port, () => {

    console.log('App Is Running');

});