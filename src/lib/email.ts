import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/confirm-email?token=${token}`;
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'email4kazim@gmail.com',
    subject: 'Confirm your email address',
    text: `Click the link to confirm your email address: ${confirmLink}`,
    html: `<p>Click the link to confirm your email address: <a href="${confirmLink}">${confirmLink}</a></p>`,
  });
};
