import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
    Email: string;
    Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  Email,
  Message
}) => (
  <div>
    <h1>Message from {firstName}!</h1>
    <h2>{Email}</h2>
    <p>{Message}</p>
  </div>
);
