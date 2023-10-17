import { type NextRequest,NextResponse } from "next/server"
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer"


export  async function POST(request:NextRequest){
const { email, name, message}= await request.json()


const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
                user:process.env.NEXT_PUBLIC_MY_EMAIL,
                pass:process.env.NEXT_PUBLIC_MY_PASSWORD
        }
})

const mailOptions:Mail.Options={
        from:process.env.NEXT_PUBLIC_MY_EMAIL,
        to:process.env.NEXT_PUBLIC_MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: `tets`,
      html:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><meta http-equiv="Content-Type" content="text/html charset=UTF-8" /><html lang="en"><head></head><h1 style="font-size:32px;line-height:1.3;font-weight:700;text-align:center;letter-spacing:-1px">${email}</h1><p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500;margin-top:24px;text-align:center">${message}</p>`,
}

const sendMailPromise=()=>new Promise<string>((resolve,reject)=>{
                transport.sendMail(mailOptions,(err)=>{
                        if(!err){
                                 resolve('Email sent')
                        }else{
                                reject(err.message)
                        }
                })
        })


try {
        await sendMailPromise()
        return NextResponse.json({ message: 'Email sent' });
} catch (error) {
        return NextResponse.json({ errors: error }, { status: 500 });
}
}
