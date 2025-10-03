import React, { useState } from 'react';

const ResumeAILandingPage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="sticky top-0 z-50 bg-white shadow-sm">
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
            <a href="#create-resume" className="btn btn-primary ml-4">Create Resume</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Create Your Perfect Resume with AI</h1>
              <p className="text-xl mb-8 opacity-90">Transform your career story into a professional, ATS-friendly resume that gets you noticed by employers.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#create-resume" className="btn btn-primary btn-lg text-lg">
                  <span className="mr-2">⚡</span> Create Resume Now
                </a>
                <a href="#features" className="btn btn-outline btn-lg text-lg text-white border-white hover:bg-white hover:text-purple-700">
                  <span className="mr-2">▶️</span> See How It Works
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="mockup-window border bg-base-300 w-full max-w-md">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  <div className="w-full max-w-sm">
                    <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="text-purple-600 text-xl">👤</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold">John Doe</h3>
                          <p className="text-gray-600 text-sm">Software Engineer</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Experience</h4>
                        <ul className="text-xs text-gray-600 list-disc pl-4">
                          <li>Senior Developer at TechCorp (2020-Present)</li>
                          <li>Full Stack Developer at WebSolutions (2018-2020)</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          <span className="badge badge-outline badge-sm">JavaScript</span>
                          <span className="badge badge-outline badge-sm">React</span>
                          <span className="badge badge-outline badge-sm">Node.js</span>
                          <span className="badge badge-outline badge-sm">Python</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default ResumeAILandingPage;