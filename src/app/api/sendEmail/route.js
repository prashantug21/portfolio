// write the code to send mail after receiving request with next js

// import nodemailer from 'nodemailer'
// import { NextRequest, NextResponse } from 'next/server'

// const transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "f54968ae3aa58d",
//       pass: "********a1b1"
//     }
//   });
//   const verifyEmail = async (req) => {
//     const request = new NextRequest(req);
//     try {
//         const { name, email, subject, message } = request.body;
//         const data = await transport.sendMail({
//             from: "Magic Elves <from@example.com>",
//             to: "Mailtrap Inbox <to@example.com>",
//             subject: subject, // Subject line
//             text: message, // plain text body
//             html: `<b>Hi ${name}</b>
//             <p>${message}</p>
//             <p>Thanks & Regards</p>
//             <p>${email}</p>
//             `, // html body
//         });
//         return NextResponse.json(data);
//     } catch (error) {
//         return NextResponse.json({ error });
//     }
// }
// export default verifyEmail;




import { EmailTemplate } from '../../components/EmailTemplate';
import {NextRequest ,NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.API_KEY);

export async function POST(req) {
    const request=await req.json()
  try {

    const {name,email,subject,message}=request;
    const data = await resend.emails.send({
      from: 'Portfolio <prashantportfolio@resend.dev>',
      to: 'prashant.pyv@gmail.com',
      subject: subject,
      react: EmailTemplate({firstName: name,Email:email, Message:message}),
    });

    return NextResponse.json({status:"success"})
  } catch (error) {
    return NextResponse.json({ error });
  }
}