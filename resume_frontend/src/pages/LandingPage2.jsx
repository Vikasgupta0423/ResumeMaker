import React, { useState } from 'react';
import { Bot, FileText, Zap, ShieldCheck, Repeat, ArrowRight } from 'lucide-react';

// Mock data for Features and How It Works sections
const features = [
  {
    icon: <Bot className="w-8 h-8 text-indigo-500" />,
    title: "AI-Powered Generation",
    description: "Simply input your job history and skills; our Gemini-powered engine crafts professional, tailored content instantly."
  },
  {
    icon: <FileText className="w-8 h-8 text-indigo-500" />,
    title: "Template Variety",
    description: "Choose from dozens of professionally designed, ATS-friendly templates that cater to every industry and style."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
    title: "ATS Optimization Check",
    description: "Get real-time feedback on keyword usage and formatting to ensure your resume passes Applicant Tracking Systems."
  },
  {
    icon: <Repeat className="w-8 h-8 text-indigo-500" />,
    title: "Unlimited Iterations",
    description: "Edit, refine, and generate new versions until your resume is perfectly polished and ready for submission."
  }
];

const steps = [
  { step: 1, title: "Tell Us About Yourself", description: "Provide basic information, previous roles, and your desired job target." },
  { step: 2, title: "AI Drafts Your Content", description: "Our AI generates compelling bullet points, summaries, and experience descriptions." },
  { step: 3, title: "Download and Apply", description: "Review, customize the design, and download your perfect resume instantly in PDF format." }
];

const App = () => {
  const [ctaClicked, setCtaClicked] = useState(false);

  // Helper component for the main navigation/header
  const Header = () => (
    <header className="py-4 px-6 md:px-12 bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-indigo-600 flex items-center">
          <Zap className="w-6 h-6 mr-2" />
          AI Resume Pro
        </h1>
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition duration-200">Features</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition duration-200">How It Works</a>
          <a href="#pricing" className="hover:text-indigo-600 transition duration-200">Pricing</a>
        </nav>
        <button className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 hidden sm:block">
          Sign In
        </button>
      </div>
    </header>
  );

  // Helper component for the main Call-to-Action button
  const CTAButton = ({ text }) => (
    <button
      onClick={() => setCtaClicked(true)}
      className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl shadow-2xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-300 w-full sm:w-auto"
    >
      {text}
      <ArrowRight className="w-5 h-5 ml-2" />
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main>
        {/* === 1. HERO SECTION === */}
        <section className="pt-20 pb-24 md:pt-32 md:pb-40 text-center bg-gradient-to-br from-white to-indigo-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-4 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-sm">
              Powered by Gemini AI
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
              The fastest way to land your dream job.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Stop struggling with writing. Our AI crafts, optimizes, and designs your ATS-friendly resume in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <CTAButton text="Start Building Your Resume" />
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white rounded-xl shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 w-full sm:w-auto">
                Watch a Demo
              </button>
            </div>
          </div>
          {ctaClicked && (
            <div className="mt-8 text-green-600 font-semibold text-lg animate-pulse">
              🚀 Success! Redirecting to the Builder... (This is a mock interaction)
            </div>
          )}
        </section>

        {/* === 2. FEATURES SECTION === */}
        <section id="features" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
              Stop Guessing, Start Succeeding
            </h3>
            <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
              Our tool gives you the edge by combining cutting-edge AI with recruiter-tested best practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-white border-2 border-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-indigo-50 p-3 rounded-xl inline-flex mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === 3. HOW IT WORKS SECTION (Process Flow) === */}
        <section id="how-it-works" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
              How AI Resume Pro Works
            </h3>
            <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
              Three simple steps from zero to a professional resume in under 10 minutes.
            </p>

            <div className="relative flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8">
              {/* Horizontal line for desktop flow */}
              <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-indigo-200 z-0"></div>

              {steps.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3 z-10">
                  {/* Step Number Circle */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-600 text-white text-3xl font-bold border-4 border-white shadow-2xl mb-6">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 px-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === 4. TRUST/TESTIMONIAL SECTION (DaisyUI Style Card) === */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-8 md:p-12 rounded-3xl shadow-2xl text-white">
              <div className="flex items-center mb-6">
                <ShieldCheck className="w-10 h-10 mr-4 text-white" />
                <h3 className="text-3xl font-extrabold">Join Thousands of Successful Job Seekers</h3>
              </div>
              <blockquote className="text-xl italic font-medium mb-6">
                "I used to spend hours tweaking my resume. With AI Resume Pro, I generated a custom resume for a specific job posting in five minutes. Got the interview two days later!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg mr-4">
                  JS
                </div>
                <div>
                  <p className="font-bold text-lg">Jane Smith</p>
                  <p className="text-indigo-200">Senior Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === 5. FINAL CTA SECTION === */}
        <section className="py-20 bg-indigo-700 text-center">
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-extrabold text-white mb-4">
                    Ready to Get Hired?
                </h3>
                <p className="text-xl text-indigo-200 mb-8">
                    Stop wasting time on Word documents. Let AI do the hard work for you.
                </p>
                <CTAButton text="Create Your Free Resume Now" />
            </div>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AI Resume Pro. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
