import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  date?: string;
  message: string;
}

const EVENT_LABELS: Record<string, string> = {
  boda: "Boda",
  corporativo: "Evento Corporativo",
  privado: "Fiesta Privada",
  club: "Club / Local",
};

function buildHtml(data: ContactBody) {
  const eventLabel = EVENT_LABELS[data.eventType] ?? data.eventType;
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#111;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:12px;overflow:hidden;border:1px solid #333;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#222 0%,#111 100%);padding:32px 40px;text-align:center;border-bottom:1px solid #333;">
            <img src="cid:logo" alt="Nacho Costero" width="120" style="display:block;margin:0 auto 16px;" />
            <p style="margin:0;font-size:13px;color:#888;letter-spacing:2px;text-transform:uppercase;">Nuevo mensaje de contacto</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 16px;background:#222;border-radius:8px;margin-bottom:12px;">
                  <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Nombre</p>
                  <p style="margin:0;font-size:16px;color:#fff;font-weight:600;">${escapeHtml(data.name)}</p>
                </td>
              </tr>
              <tr><td style="height:12px;"></td></tr>
              <tr>
                <td style="padding:12px 16px;background:#222;border-radius:8px;">
                  <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Email</p>
                  <p style="margin:0;font-size:16px;color:#fff;">${escapeHtml(data.email)}</p>
                </td>
              </tr>
              <tr><td style="height:12px;"></td></tr>
              ${data.phone ? `
              <tr>
                <td style="padding:12px 16px;background:#222;border-radius:8px;">
                  <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Teléfono</p>
                  <p style="margin:0;font-size:16px;color:#fff;">${escapeHtml(data.phone)}</p>
                </td>
              </tr>
              <tr><td style="height:12px;"></td></tr>
              ` : ""}
              <tr>
                <td style="padding:12px 16px;background:#222;border-radius:8px;">
                  <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Tipo de evento</p>
                  <p style="margin:0;font-size:16px;color:#fff;font-weight:600;">${escapeHtml(eventLabel)}</p>
                </td>
              </tr>
              <tr><td style="height:12px;"></td></tr>
              ${data.date ? `
              <tr>
                <td style="padding:12px 16px;background:#222;border-radius:8px;">
                  <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Fecha del evento</p>
                  <p style="margin:0;font-size:16px;color:#fff;">${escapeHtml(data.date)}</p>
                </td>
              </tr>
              <tr><td style="height:12px;"></td></tr>
              ` : ""}
              <tr>
                <td style="padding:16px;background:#222;border-radius:8px;border-left:3px solid #fff;">
                  <p style="margin:0 0 8px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Mensaje</p>
                  <p style="margin:0;font-size:15px;color:#ddd;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #333;text-align:center;">
            <p style="margin:0;font-size:12px;color:#666;">Este correo fue enviado desde el formulario de contacto de nachocostero.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name || !body.email || !body.eventType || !body.message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Email no válido." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const logoPath = path.join(process.cwd(), "public", "Nacho Costero 150px (1).png");

    await transporter.sendMail({
      from: `"Nacho Costero Web" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: body.email,
      subject: `Nuevo contacto: ${body.name} — ${EVENT_LABELS[body.eventType] ?? body.eventType}`,
      html: buildHtml(body),
      attachments: [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "logo",
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
