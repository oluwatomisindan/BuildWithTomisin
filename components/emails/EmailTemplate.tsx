import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    maxWidth: '600px',
    margin: '0 auto',
  }}>
    <h1 style={{ color: '#111827', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
      New Message from {name}
    </h1>
    <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '4px', border: '1px solid #e5e7eb' }}>
      <p style={{ margin: '0 0 8px 0', color: '#374151' }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ margin: '0', color: '#374151' }}>
        <strong>Message:</strong><br />
        {message}
      </p>
    </div>
    <p style={{ marginTop: '16px', fontSize: '12px', color: '#6b7280' }}>
      This email was sent from the contact form on your portfolio website.
    </p>
  </div>
);
