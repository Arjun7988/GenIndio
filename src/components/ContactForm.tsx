import React, { useState, useEffect } from 'react';
import { Phone, Send, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { validateForm, FormData, ValidationErrors } from '../utils/formValidation';
import { EMAIL_CONFIG } from '../utils/emailConfig';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        to_email: 'devireddy.mallikarjun@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-96 h-96 animate-pulse">
          <div className="absolute w-full h-full bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-0 bottom-0 w-96 h-96 animate-pulse delay-1000">
          <div className="absolute w-full h-full bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form Column */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className={`w-full bg-gray-900/50 border ${
                      errors.name ? 'border-red-500' : 'border-purple-500/20'
                    } rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className={`w-full bg-gray-900/50 border ${
                      errors.email ? 'border-red-500' : 'border-purple-500/20'
                    } rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <div className="relative">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number (Optional)"
                      className={`w-full bg-gray-900/50 border ${
                        errors.phone ? 'border-red-500' : 'border-purple-500/20'
                      } rounded-lg pl-16 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-gray-900/50 border ${
                      errors.subject ? 'border-red-500' : 'border-purple-500/20'
                    } rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm`}
                  >
                    <option value="">Select Subject *</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="AI Voice Agents">AI Voice Agents</option>
                    <option value="Custom AI Solutions">Custom AI Solutions</option>
                    <option value="Workflow Automation">Workflow Automation</option>
                    <option value="Marketing Automation">Marketing Automation</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows={4}
                    className={`w-full bg-gray-900/50 border ${
                      errors.message ? 'border-red-500' : 'border-purple-500/20'
                    } rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] focus:scale-[0.98] flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                alt="Customer Service"
                className="relative rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;