import React from 'react';
import { Mail, ExternalLink, CheckCircle } from 'lucide-react';

const EmailSetupGuide: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Email Setup Guide</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">📧 Current Email Functionality</h3>
              <p className="text-blue-700">
                Email buttons now open Gmail compose window with your email (vorexaweb@gmail.com) pre-filled.
                Instagram link now correctly goes to: https://www.instagram.com/vorexaweb/
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Contact Form Setup Needed</h3>
              <p className="text-yellow-700 mb-3">
                To receive contact form messages directly in your Gmail, you need to set up EmailJS:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Step 1: Create EmailJS Account</p>
                    <p className="text-sm text-gray-600">Go to <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">emailjs.com</a> and sign up for free</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Step 2: Connect Gmail</p>
                    <p className="text-sm text-gray-600">Add Gmail as your email service in EmailJS dashboard</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Step 3: Create Email Template</p>
                    <p className="text-sm text-gray-600">Set up a template with fields: from_name, from_email, message</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Step 4: Update Code</p>
                    <p className="text-sm text-gray-600">Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY in App.tsx</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">✅ Alternative: Simple Email Links</h3>
              <p className="text-green-700">
                For now, all email buttons open Gmail compose with your email pre-filled. 
                Visitors can easily send you messages this way!
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <p className="text-sm text-gray-500">
              Need help with setup? Contact me and I can help you configure EmailJS for free form submissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSetupGuide;
</parameter>