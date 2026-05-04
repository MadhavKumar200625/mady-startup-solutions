import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, country, idea } = body;

    if (!name || !email) {
      return Response.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    // ✅ GoDaddy SMTP config
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // official@madysolutions.in
        pass: process.env.EMAIL_PASS, // GoDaddy email password
      },
    });

    // =========================
    // 📩 1. MAIL TO CLIENT
    // =========================
    await transporter.sendMail({
      from: `"Mady Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Mady Solutions 🚀",
      html: `
        <div style="font-family: Inter, sans-serif; padding:20px;">
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out to <b>Mady Solutions</b>.</p>
          <p>We’ve received your message and our team will get back to you within <b>24 hours</b>.</p>

          <p>If it's urgent, feel free to reply to this email.</p>

          <br/>

          <p>— Team Mady Solutions</p>
        </div>
      `,
    });

    // =========================
    // 📩 2. MAIL TO YOU (LEAD)
    // =========================
    await transporter.sendMail({
      from: `"Website Lead" <${process.env.EMAIL_USER}>`,
      to: "madysoultions26@gmail.com",
      subject: "🚀 New Startup Inquiry",
      html: `
        <div style="font-family: Inter, sans-serif; padding:20px;">
          <h2>New Lead Received</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${country.code} ${phone}</p>
          <p><b>Country:</b> ${country.name}</p>

          <p><b>Idea:</b></p>
          <p>${idea}</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}