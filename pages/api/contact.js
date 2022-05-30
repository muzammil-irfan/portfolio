import nodemailer from 'nodemailer';
import db from '../../lib/db';
import EmailList from '../../models/EmailList';

const handler = async (req,res) => {
    // try{
        if(req.method === 'POST') {
            
            const transporter = nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user: process.env.USER_GMAIL,
                    pass: process.env.USER_GMAIL_PASSWORD,
                }
                
            })
            db.connect();
            const {email} = req.body;
            let userState;
            const check = await EmailList.findOne({email});
            if(check === null){
                await EmailList.create({email});
                db.disconnect();
                userState = 'New Client';
            } else {
                userState = 'Old Client';
            }
            const mailOptions = {
                from:process.env.USER_GMAIL,
                to:'skillatria@gmail.com',
                subject:`You have got an email from ${email} on your website`,
                text:`${req.body.message}\n\n${email}(${userState})\n Client Name = ${req.body.name} \n Service = ${req.body.services}`,
            };
            transporter.sendMail(mailOptions,((err,resolve)=>{
                if(err !== null){
                    console.log(err)
                    return res.status(401).send(err);
                } else {
                    return res.status(200).send(resolve.response)
                }
            }))
        } else {
            return res.status(401).send('Page not found');
        }
}
export default handler;