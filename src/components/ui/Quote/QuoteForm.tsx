'use client';

import { useState } from 'react';
import { Button } from "../Button";
import { Card } from "../Card";
import { AnimatedSection } from "../AnimatedSection";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <AnimatedSection delay={0.2}>
      <Card
        variant="feature"
        className="p-8 md:p-12 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101] border-white/10"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Doe"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your Company"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-white/70 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full bg-[#090313] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="web">Website Engineering</option>
                  <option value="app">Application Development</option>
                  <option value="software">Custom Software Systems</option>
                  <option value="marketing">Digital Marketing & Growth</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white/70 mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full bg-[#090313] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled>Select budget</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-white/70 mb-2">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full bg-[#090313] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled>Select timeline</option>
                    <option value="1m">Less than 1 month</option>
                    <option value="1-3m">1 - 3 months</option>
                    <option value="3-6m">3 - 6 months</option>
                    <option value="6m+">6+ months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-white/70 mb-2">Project Description</label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Tell us about your project goals, features, and any specific requirements..."
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <Button variant="purple" size="lg" className="w-full md:w-auto px-12">
              Request Quote
            </Button>
          </div>
        </form>
      </Card>
    </AnimatedSection>
  );
}
