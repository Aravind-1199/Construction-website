import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        alert(`❌ ${result.message || "Failed to send email."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: "(+91) 8754226705",
      description: "Mon-Fri 8AM-6PM",
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: "ammanconstruction2025@gmail.com",
      description: "We respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Office",
      details: "123 Construction Ave, Viluppuram",
      description: "Tamil Nadu, India",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM",
      description: "Sat: 9AM-4PM",
    },
  ];

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Renovation & Remodeling",
    "Industrial Projects",
    "Project Management",
    "Consulting Services",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Ready to start your project? Get in touch for a free consultation.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Project Type + Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select project type</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select budget</option>
                  <option value="under-50l">Under ₹4,150,000</option>
                  <option value="50l-1cr">₹4,150,000 - ₹8,300,000</option>
                  <option value="1cr-2cr">₹8,300,000 - ₹20,750,000</option>
                  <option value="2cr-4cr">₹20,750,000 - ₹41,500,000</option>
                  <option value="over-4cr">Over ₹41,500,000</option>
                </select>
              </div>

              {/* Timeline */}
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6-12months">6-12 months</option>
                <option value="over-1year">Over 1 year</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Project details *"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
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

            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Why Choose Amman Construction?
              </h3>
              <ul className="space-y-3">
                {[
                  "Free initial consultation",
                  "Detailed project estimates",
                  "Licensed & insured",
                  "20+ years experience",
                  "Quality guarantee",
                  "24/7 customer support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600 mb-8">
            Located in Viluppuram, Tamil Nadu — we welcome you for a discussion.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29724.19795256559!2d79.47890899221362!3d11.933717889251879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356c0727b6b77%3A0x2c8815a4b312e5f3!2sViluppuram%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1759908259395!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
