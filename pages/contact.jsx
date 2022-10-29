import Head from 'next/head';
import ContactForm from '../components/contact/contact_form';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />;
    </>
  );
};

export default ContactPage;
