import React from "react";
import { FaMagic, FaRocket, FaFileAlt, FaSmile } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-vector/resume-concept-illustration_114360-1935.jpg"
            alt="AI Resume"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Build Your Resume with <span className="text-primary">AI</span>
            </h1>
            <p className="py-6 text-lg text-gray-600">
              Create a professional, ATS-friendly resume in minutes.  
              Just tell us about yourself, and let our AI craft the perfect resume for you!
            </p>
            <button className="btn btn-primary btn-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-base-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="card bg-base-200 shadow-xl p-6">
            <FaMagic className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl">AI Powered</h3>
            <p className="mt-2">Smart resume generation tailored for your profile.</p>
          </div>

          <div className="card bg-base-200 shadow-xl p-6">
            <FaRocket className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Fast & Easy</h3>
            <p className="mt-2">Generate resumes in minutes with minimal input.</p>
          </div>

          <div className="card bg-base-200 shadow-xl p-6">
            <FaFileAlt className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl">ATS Friendly</h3>
            <p className="mt-2">Optimized resumes to pass applicant tracking systems.</p>
          </div>

          <div className="card bg-base-200 shadow-xl p-6">
            <FaSmile className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Customizable</h3>
            <p className="mt-2">Edit and personalize your resume anytime.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">How It Works</h2>
          <div className="steps steps-vertical lg:steps-horizontal">
            <div className="step step-primary">Tell us about yourself</div>
            <div className="step step-primary">AI builds your resume</div>
            <div className="step step-primary">Customize & Download</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Build Your Resume?</h2>
        <p className="mb-8 text-lg">
          Join thousands of users who landed their dream jobs with AI-powered resumes.
        </p>
        <button className="btn btn-secondary btn-lg">Start Now</button>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-300 text-base-content">
        <aside>
          <h2 className="text-xl font-bold">AI Resume Maker</h2>
          <p>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Links</header>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
