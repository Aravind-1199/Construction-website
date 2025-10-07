import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! We'll get back to you within 24 hours.");
        setFormData({
          name: '', email: '', phone: '', company: '', projectType: '',
          budget: '', timeline: '', message: ''
        });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }
  };

  const contactInfo = [
    { icon: <Phone />, title: 'Phone', details: '(555) 123-4567', description: 'Mon-Fri 8AM-6PM' },
    { icon: <Mail />, title: 'Email', details: 'info@buildpro.com', description: 'We respond within 24 hours' },
    { icon: <MapPin />, title: 'Office', details: '123 Construction Ave', description: 'Building City, BC 12345' },
    { icon: <Clock />, title: 'Hours', details: 'Mon-Fri: 8AM-6PM', description: 'Sat: 9AM-4PM' }
  ];

  const services = [
    'Residential Construction', 'Commercial Construction', 'Renovation & Remodeling',
    'Industrial Projects', 'Project Management', 'Consulting Services'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
          Ready to start your construction project? Get in touch for a free consultation and quote.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text" name="name" value={formData.name} onChange={handleInputChange}
                  placeholder="Full Name*" required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <input
                  type="email" name="email" value={formData.email} onChange={handleInputChange}
                  placeholder="Email*" required
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                  placeholder="Phone" className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" name="company" value={formData.company} onChange={handleInputChange}
                  placeholder="Company" className="w-full px-4 py-3 border rounded-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="projectType" value={formData.projectType} onChange={handleInputChange} required
                  className="w-full px-4 py-3 border rounded-lg">
                  <option value="">Select project type</option>
                  {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
                <select name="budget" value={formData.budget} onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg">
                  <option value="">Budget</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                  <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
                  <option value="250k-500k">₹2,50,000 - ₹5,00,000</option>
                  <option value="over-500k">Above ₹5,00,000</option>
                </select>
              </div>

              <textarea name="message" value={formData.message} onChange={handleInputChange}
                rows={6} placeholder="Project Details*" required
                className="w-full px-4 py-3 border rounded-lg"></textarea>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2">
                <Send className="h-5 w-5" /> Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p>{info.details}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose BuildPro?</h3>
              <div className="space-y-3">
                {[
                  'Free initial consultation',
                  'Detailed project estimates',
                  'Licensed & insured',
                  '20+ years experience',
                  'Quality guarantee',
                  '24/7 customer support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
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

          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be integrated here</p>
              <p className="text-sm text-gray-500">123 Construction Ave, Building City, BC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
