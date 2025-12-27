"use server";

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/emails/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'All fields are required' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['oluwatomisindan@gmail.com'], 
      subject: `New Message from ${name}`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Email Action Error:', err);
    return { error: err.message || 'Failed to send email' };
  }
}
