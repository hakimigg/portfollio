import React, { useEffect } from 'react';
import { Menu, X, Monitor, Zap, Palette, ShoppingBag, Smartphone, Building, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // You'll need to replace this
      'YOUR_TEMPLATE_ID', // You'll need to replace this
      form,
      'YOUR_PUBLIC_KEY' // You'll need to replace this
    )
    .then((result) => {
      alert("Thank you for your message! I'll get back to you soon.");
      form.reset();
    }, (error) => {
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at vorexaweb@gmail.com');
      console.error('EmailJS error:', error);
    });
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Website Inquiry');
    const body = encodeURIComponent('Hello,\n\nI would like to discuss a project with you.\n\nBest regards,');
    window.open(`mailto:vorexaweb@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHeaderScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : ''
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="px-4 py-2 text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-blue-400">Creative</span>
                <span className="block text-purple-400">Web</span>
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Designer</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                I craft digital experiences that blend{' '}
                <span className="text-purple-400 font-semibold">creativity</span> with{' '}
                <span className="text-purple-400 font-semibold">functionality</span>, 
                bringing your vision to life through clean, modern design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  View Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                {['UI/UX Design', 'Frontend Development', 'Brand Identity', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-purple-500/20 hover:border-purple-400/30 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <div className="absolute top-12 left-12 w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute top-24 right-12 w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute bottom-12 left-24 w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting beautiful, user-friendly websites that help businesses grow and connect with their audience
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm passionate about creating digital experiences that make a difference
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Creative Web Designer & Developer</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in web design and development, I specialize in creating 
                beautiful, functional websites that drive results. My approach combines creative design 
                with technical expertise to deliver exceptional user experiences.
              </p>
              <div className="space-y-4">
                {[
                  'Responsive Design & Development',
                  'UI/UX Design & Prototyping',
                  'E-commerce Solutions',
                  'Performance Optimization'
                ].map((skill, index) => (
                  <div key={skill} className="flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-3 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-purple-600'}`}></span>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">My Skills</h4>
              <div className="space-y-6">
                {[
                  { skill: 'HTML/CSS', percentage: 95 },
                  { skill: 'JavaScript', percentage: 90 },
                  { skill: 'React', percentage: 85 },
                  { skill: 'UI/UX Design', percentage: 88 }
                ].map(({ skill, percentage }) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-2">
                      <span>{skill}</span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: 'Web Design',
                description: 'Beautiful, responsive websites that capture your brand\'s essence and engage your audience effectively.'
              },
              {
                icon: Zap,
                title: 'Web Development',
                description: 'Custom web applications and e-commerce solutions built with modern technologies and best practices.'
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'User-centered design that creates intuitive, engaging experiences that convert visitors into customers.'
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing my latest work and creative projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: 'E-commerce Website',
                description: 'Modern online store with seamless shopping experience',
                tags: ['React', 'Node.js']
              },
              {
                icon: Smartphone,
                title: 'Mobile App',
                description: 'Cross-platform mobile application',
                tags: ['React Native', 'Firebase']
              },
              {
                icon: Building,
                title: 'Corporate Website',
                description: 'Professional business website with modern design',
                tags: ['HTML/CSS', 'JavaScript']
              }
            ].map(({ icon: Icon, title, description, tags }) => (
              <div key={title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <div className="flex space-x-2">
                    {tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-sm ${
                        tag === 'React' || tag === 'HTML/CSS' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Let's discuss how I can help bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to take on new projects and help businesses grow their online presence. 
                Whether you need a complete website redesign or a new web application, I'm here to help.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'vorexaweb@gmail.com', color: 'bg-blue-500', onClick: handleEmailClick },
                  { icon: Phone, text: '0555884743', color: 'bg-purple-500' },
                  { icon: MapPin, text: 'Remote / Worldwide', color: 'bg-blue-500' }
                ].map(({ icon: Icon, text, color, onClick }) => (
                  <div key={text} className={`flex items-center ${onClick ? 'cursor-pointer hover:text-white transition-colors duration-300' : ''}`} onClick={onClick}>
                    <div className={`w-6 h-6 ${color} rounded-full mr-4 flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 resize-none transition-colors duration-300"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              VorexaWeb
            </div>
            <p className="text-gray-400 mb-8">
              Creating beautiful digital experiences that make a difference
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <button onClick={handleEmailClick} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </button>
              <a href="https://www.instagram.com/vorexaweb/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 VorexaWeb. Crafting digital excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;