'use client'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_91vowr7', 'template_ozcserm', form.current, '5qrIShPiUF_BIzkPw')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      });

    e.target.reset();
  }

  return (
    <main className="bg-blue-50 min-h-screen flex flex-col items-center justify-center px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Contact Us</h1>
      <p className="text-lg text-blue-700 mb-8 max-w-lg text-center">
        We&apos;d love to hear from you! Whether you have a question about our service, need support, or just want to say hello, drop us a message below.
      </p>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-blue-800 font-semibold">Name</label>
          <input type="text" id="name" name="user_name" required className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"/>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-800 font-semibold">Email</label>
          <input type="email" id="email" name="user_email" required className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"/>
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-blue-800 font-semibold">Subject</label>
          <input type="text" id="subject" name="user_subject" required className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"/>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-blue-800 font-semibold">Message</label>
          <textarea id="message" name="message" rows="5" required className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"></textarea>
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </main>
  );
}
