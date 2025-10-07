import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { posts } from '../data/post';
import emailjs from "@emailjs/browser";

const Blog: React.FC = () => {
  const featured = posts[0];
  const others = posts.slice(1);

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    emailjs
      .send(
        "service_auhgop8", // replace with your EmailJS service ID
        "template_5xx9dad", // replace with your EmailJS template ID
        { user_email: email },
        "ksyw-ZBxFzVMjFymL" // replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          setEmail("");
          setTimeout(() => {
            window.location.reload(); // reloads page to clear all state
          }, 1000);
        },
        (err) => {
          console.error(err.text);
        }
      );
  };


  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Construction Blog</h1>
        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
          Expert insights, industry trends, and practical tips from our construction professionals.
        </p>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 transform transition-transform duration-300 hover:scale-105">

            {/* Image */}
            <div className="relative">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
                Featured
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">{featured.title}</h2>
              <p className="text-gray-600 leading-relaxed">{featured.excerpt}</p>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-colors duration-200"
              >
                <span>Read More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest construction industry insights and expert advice.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image with Category Badge */}
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer with Read More */}
                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest construction insights, tips, and industry news.
          </p>

          {success && <p className="mb-4 text-green-200">Thank you for your subscription!</p>}

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
