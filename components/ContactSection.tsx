"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const form = useRef<HTMLFormElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID! ,form.current!, {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    console.log('Form Submitted:', form.current);
    // Add your form submission logic here
  };

  return (
    <div
      id="contact-me"
      className="min-h-screen flex flex-col items-center justify-center p-6"
    >
      <h2 className="text-6xl font-bold mb-16 text-center">Contact Me</h2>
      <div className="p-6 rounded-lg w-full max-w-md">
        <form ref={form} onSubmit={handleSubmit} className="space-y-11">
          <div>
            <label
              htmlFor="from_name"
              className="block text-lg font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-2 text-black"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="block text-lg font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-2 text-black"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-2 text-black"
              placeholder="Your Message"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
