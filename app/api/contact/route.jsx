import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const username = "email";
  const password = "password";
  const myEmail = "akhilk251099@gmail.com";
  // const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  // const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  // const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    // host: "smtp.yahoo.com",
    service: "yahoo",
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${firstname + lastname} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>Service: ${service} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
