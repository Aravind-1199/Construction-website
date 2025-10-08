import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const contactInfo = [
    { icon: <Phone className="h-6 w-6 text-red-600" />, title: 'Phone', details: '(555) 123-4567', description: 'Mon-Fri 8AM-6PM' },
    { icon: <Mail className="h-6 w-6 text-red-600" />, title: 'Email', details: 'info@buildpro.com', description: 'We respond within 24 hours' },
    { icon: <MapPin className="h-6 w-6 text-red-600" />, title: 'Office', details: '123 Construction Ave', description: 'Building City, BC 12345' },
    { icon: <Clock className="h-6 w-6 text-red-600" />, title: 'Hours', details: 'Mon-Fri: 8AM-6PM', description: 'Sat: 9AM-4PM' }
  ];

  const services = [
    'Residential Construction',
    'Commercial Construction',
    'Renovation & Remodeling',
    'Industrial Projects',
    'Project Management',
    'Consulting Services'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Success:", data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: ""
        });
      } else {
        console.log("Error:", data.message || "Failed to send message");
      }
    } catch (err) {
      console.log("Error: Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="relative bg-gray-50 text-gray-800 font-montserrat">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold drop-shadow-md mb-3">Contact Us</h1>
          <p className="text-lg text-orange-200">We're Here to Serve & Connect with You</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-lg border border-gray-100 shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Get Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name *" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address *" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                <input name="company" value={formData.company} onChange={handleInputChange} placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="projectType" value={formData.projectType} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Project Type *</option>
                  {services.map((service, index) => <option key={index} value={service}>{service}</option>)}
                </select>
                <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Budget</option>
                  <option value="under-50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>
              <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Select Timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6-12months">6-12 months</option>
                <option value="over-1year">Over 1 year</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Project Details *" required rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
              {feedback && <p className={`mt-2 ${feedback.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{feedback}</p>}
              <button type="submit" disabled={loading} className={`w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
                <Send size={20} /> {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-700">{info.details}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
