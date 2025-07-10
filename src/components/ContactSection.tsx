import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
  Zap,
  Crown,
  Sparkles,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink
} from 'lucide-react';

type ContactSectionProps = {
  darkMode?: boolean;
};

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode = true }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    goal: '',
    vision: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.goal || !formData.vision) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          goal: formData.goal,
          vision: formData.vision,
          _subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      goal: '',
      vision: ''
    });
    setSubmitStatus('idle');
  };

  return (
    <section
      id="contact"
      className={`py-16 sm:py-20 text-white relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-500/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 sm:mb-6">
            Ready to Go{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Golden?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Let's turn your brand into the golden legend it was meant to be. Every great transformation starts with a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center space-x-3">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              <span>Let's Talk Strategy</span>
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'goldhatindia@gmail.com', link: 'mailto:goldhatindia@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 (555) GOLD-HAT', link: 'tel:+915555555555' },
                { icon: MapPin, label: 'Office', value: 'Patna, Bihar, India', link: null }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 sm:p-4 rounded-xl flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-base sm:text-lg">{item.label}</div>
                    <div className="flex items-center space-x-2">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-300 text-sm sm:text-base break-all hover:text-yellow-500 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-300 text-sm sm:text-base break-all">{item.value}</div>
                      )}
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 hover:bg-yellow-500/20 rounded"
                        title="Copy to clipboard"
                      >
                        {copiedField === item.label ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400 hover:text-yellow-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center space-x-2">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <span>Follow The Gold</span>
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {[
                  { Icon: Instagram, link: 'https://instagram.com/goldhat.agency' },
                  { Icon: Linkedin, link: 'https://linkedin.com/company/goldhat-agency' },
                  { Icon: Twitter, link: 'https://twitter.com/goldhat_agency' },
                  { Icon: Facebook, link: 'https://facebook.com/goldhat.agency' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-110 group"
                  >
                    <social.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-yellow-500/30">
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 flex items-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <span>Book a Free Strategy Call</span>
              </h4>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Get a personalized 30-minute consultation where we'll analyze your current marketing and show you exactly how to achieve golden results.
              </p>
              <a 
                href="mailto:goldhatindia@gmail.com?subject=Free Strategy Call Request&body=Hi, I would like to schedule a free 30-minute strategy call to discuss my marketing goals."
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <span>Schedule Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: 'First Name', name: 'firstName', placeholder: 'John' },
                  { label: 'Last Name', name: 'lastName', placeholder: 'Doe' }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-bold mb-2 text-yellow-500">{field.label}</label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your Amazing Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">What's Your Goal?</label>
                <select 
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white transition-all duration-300 text-sm sm:text-base"
                >
                  <option value="" className="bg-gray-800">Select your primary goal</option>
                  <option value="Increase Brand Awareness" className="bg-gray-800">Increase Brand Awareness</option>
                  <option value="Generate More Leads" className="bg-gray-800">Generate More Leads</option>
                  <option value="Grow Social Media" className="bg-gray-800">Grow Social Media</option>
                  <option value="Boost Sales" className="bg-gray-800">Boost Sales</option>
                  <option value="Web Development" className="bg-gray-800">Web Development</option>
                  <option value="App Development" className="bg-gray-800">App Development</option>
                  <option value="Other" className="bg-gray-800">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Tell Us About Your Vision</label>
                <textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 resize-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Describe your dream outcome. What would success look like for your brand?"
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-xl p-3 sm:p-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-400 text-sm sm:text-base">Thank you! Your message has been sent successfully. We'll get back to you soon!</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-xl p-3 sm:p-4">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-400 text-sm sm:text-base">Please fill in all required fields.</span>
                </div>
              )}
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-spin" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;