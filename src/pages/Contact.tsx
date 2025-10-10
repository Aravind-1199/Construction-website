import React, { useState, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    emailjs
      .sendForm(
        'service_jr0m4wi',    // 🔹 Replace with your EmailJS Service ID
        'template_ryvkh17',   // 🔹 Replace with your EmailJS Template ID
        formRef.current,
        'LJjF95FoQiBuJqy4U'     // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            message: ''
          });
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.error('Email send error:', error);
          setSending(false);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Phone',
      details: '(91+)8754226705',
      description: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email',
      details: 'ammanconstruction2025@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Office',
      details: '123 Construction Ave',
      description: 'Building City, BC 12345'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Hours',
      details: 'Mon-Fri: 8AM-6PM',
      description: 'Sat: 9AM-4PM'
    }
  ];

  const services = [
    'Residential Construction',
    'Commercial Construction',
    'Renovation & Remodeling',
    'Industrial Projects',
    'Project Management',
    'Consulting Services'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Get in touch for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Free Quote</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="91+"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select project type</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under ₹4,150,000</option>
                        <option value="50k-100k">₹4,150,000 - ₹8,300,000</option>
                        <option value="100k-250k">₹8,300,000 - ₹20,750,000</option>
                        <option value="250k-500k">₹20,750,000 - ₹41,500,000</option>
                        <option value="over-500k">Over ₹41,500,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="over-1year">Over 1 year</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Please describe your project requirements, location, and any specific needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {sending ? 'Sending...' : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {success && (
                    <p className="text-green-600 font-semibold text-center mt-4">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-gray-700">{info.details}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-8 max-w-xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Why Choose Amman Construction?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Detailed project estimates',
                    'Licensed & insured',
                    '20+ years experience',
                    'Quality guarantee',
                    '24/7 customer support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Building City, we're easily accessible for consultations and meetings.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29724.19795256559!2d79.47890899221362!3d11.933717889251879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356c0727b6b77%3A0x2c8815a4b312e5f3!2sViluppuram%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1759908259395!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
