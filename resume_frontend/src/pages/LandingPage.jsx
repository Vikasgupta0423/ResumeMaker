import React, { useState, useEffect } from 'react';

const ResumeAILandingPage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse move effect for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Content',
      description: 'Our advanced AI analyzes your experience and generates professional, industry-specific content for your resume.'
    },
    {
      icon: '🎨',
      title: 'Professional Templates',
      description: 'Choose from a variety of ATS-friendly, professionally designed templates that highlight your strengths.'
    },
    {
      icon: '🔍',
      title: 'ATS Optimization',
      description: 'Our resumes are optimized to pass through Applicant Tracking Systems used by most employers today.'
    },
    {
      icon: '✏️',
      title: 'Easy Customization',
      description: 'Easily customize your resume with our intuitive editor. No design skills required.'
    },
    {
      icon: '📥',
      title: 'Multiple Formats',
      description: 'Download your resume in PDF, Word, or plain text formats to suit any application requirement.'
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Get insights on how your resume performs and receive suggestions for improvement.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      content: 'The AI-generated content was spot-on! I landed three interviews within two weeks of using my new resume.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      content: 'I was struggling to update my resume after 5 years at the same company. ResumeAI made it so easy and professional!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Designer',
      content: 'The ATS optimization feature is a game-changer. I started getting callbacks immediately after using ResumeAI.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How does the AI generate resume content?',
      answer: 'Our AI analyzes your experience, skills, and industry trends to create professional, targeted content that highlights your strengths.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take data security seriously. Your information is encrypted and we never share your personal data with third parties.'
    },
    {
      question: 'Can I customize the AI-generated resume?',
      answer: 'Absolutely! You can easily edit any part of the resume to match your preferences.'
    },
    {
      question: 'Do you offer different resume templates?',
      answer: 'Yes, we offer multiple professionally designed templates that are ATS-friendly and industry-specific.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="navbar container mx-auto px-4">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl font-bold text-purple-700">
              <span className="mr-2">📄</span> ResumeAI
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 hidden md:flex">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <div className="dropdown dropdown-end md:hidden">
              <label 
                tabIndex={0} 
                className="btn btn-ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              {isMenuOpen && (
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
                  <li><a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
                  <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
                </ul>
              )}
            </div>
            {/* <a href="#create-resume" className="btn btn-primary ml-4">Create Resume</a> */}
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 transition-all duration-1000"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
                linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6B8DD6 100%)
              `
            }}
          />
          
          {/* Animated Shapes */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          
          {/* Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">AI-Powered Resume Builder</span>
            </div>

            {/* Main Heading with Typing Animation Effect */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100" style={{backgroundSize: '200% 200%', animation: 'gradient 8s ease infinite'}}>
                Create Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 mt-2" style={{backgroundSize: '200% 200%', animation: 'gradient 8s ease infinite 0.5s'}}>
                Perfect Resume
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              Transform your career story into a professional, <span className="font-semibold text-purple-200">ATS-friendly resume</span> that gets you noticed by employers.
            </p>

            {/* Stats */}
            <div className="flex justify-center items-center gap-8 mb-8 text-sm md:text-base">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                <div className="text-purple-200">Resumes Created</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">89%</div>
                <div className="text-purple-200">Interview Rate</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">4.9/5</div>
                <div className="text-purple-200">User Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="#create-resume" 
                className="group relative overflow-hidden btn btn-lg text-lg px-8 py-4 rounded-2xl border-0 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                style={{background: 'linear-gradient(to right, #8B5CF6, #EC4899)'}}
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-3 text-xl">⚡</span>
                  Create Resume Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300"></div>
              </a>
              
              <a 
                href="#features" 
                className="btn btn-lg btn-outline text-lg px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-700 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="mr-3">▶️</span>
                Watch Demo
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Secure & Private</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <span>🚀</span>
                <span>No Credit Card Required</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>4.9/5 Stars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our AI-powered resume builder helps you create professional resumes that stand out to employers and pass through ATS systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Creating your perfect resume is simple with our AI-powered platform.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/3">
              <div className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Tell Us About Yourself</h3>
              <p className="text-gray-600">Provide details about your experience, education, skills, and career goals.</p>
            </div>
            
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/3">
              <div className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">AI Generates Your Resume</h3>
              <p className="text-gray-600">Our AI analyzes your information and creates a professional, tailored resume.</p>
            </div>
            
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/3">
              <div className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Customize & Download</h3>
              <p className="text-gray-600">Review, customize if needed, and download your resume in your preferred format.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#create-resume" className="btn btn-primary btn-lg">
              <span className="mr-2">⚡</span> Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Join thousands of professionals who have landed their dream jobs with our AI resume builder.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <div className="avatar mr-4">
                      <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                        <span className="text-purple-600">👤</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                  <div className="rating rating-sm mt-2">
                    {[...Array(5)].map((_, i) => (
                      <input 
                        key={i}
                        type="radio" 
                        name={`rating-${index}`} 
                        className="mask mask-star" 
                        checked={i < testimonial.rating}
                        readOnly
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="create-resume" className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Perfect Resume?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of job seekers who have transformed their careers with our AI-powered resume builder.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="btn btn-primary btn-lg text-lg">
              <span className="mr-2">🚀</span> Create Your Resume Now
            </a>
            <a href="#features" className="btn btn-outline btn-lg text-lg text-white border-white hover:bg-white hover:text-purple-700">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our AI resume builder.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow bg-base-100 mb-4 shadow-md">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">{faq.question}</div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for resume tips, career advice, and product updates.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered w-full rounded-r-none" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary rounded-l-none">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div className="grid grid-flow-col gap-4">
          <a href="#features" className="link link-hover">Features</a>
          <a href="#how-it-works" className="link link-hover">How It Works</a>
          <a href="#testimonials" className="link link-hover">Testimonials</a>
          <a href="#" className="link link-hover">Privacy Policy</a>
        </div> 
        <div>
          <div className="grid grid-flow-col gap-4">
            <a><span className="text-2xl">📘</span></a>
            <a><span className="text-2xl">🐦</span></a>
            <a><span className="text-2xl">📷</span></a>
          </div>
        </div> 
        <div>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by ResumeAI</p>
        </div>
      </footer>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ResumeAILandingPage;