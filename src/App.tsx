import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import BlogDetails from './components/postdetails';
import OtherDetails from './components/otherdetails';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />

            {/* Dynamic project details route */}
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/blog/other/:id" element={<OtherDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
