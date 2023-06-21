import * as nodemailer from 'nodemailer';

export default function sendMail({ from, name, subject, message }) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY
        }
    });

    return transporter.sendMail({
        from: `${name} <${process.env.SENDER_EMAIL}>`,
        to: process.env.TO_EMAIL,
        replyTo: from,
        subject: subject,
        text: message,
        html: `<p style="white-space: pre">${message}</p>`
    })
}