import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_fneqgrw',     // 🔁 Replace with your EmailJS service ID
        'template_bgxzbf9',    // 🔁 Replace with your EmailJS template ID
        formData,
        'HbocDt8HhtZoCgZK3'      // 🔁 Replace with your EmailJS public key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <a href="mailto:himanshi1657@gmail.com" className="text-gray-600 hover:text-blue-600">
                  himanshi1657@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Nabha, Punjab, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">Available upon request</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
