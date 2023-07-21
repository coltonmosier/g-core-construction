// Contact.tsx
import React from 'react';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact: React.FC = () => {
  return (
    <div>
      <ContactInformation />
      <ContactForm />
    </div>
  );
}

export default Contact;
