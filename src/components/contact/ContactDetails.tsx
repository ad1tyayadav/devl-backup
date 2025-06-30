
import React from 'react';

const ContactDetails = () => {
  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <h4 className="text-white font-semibold mb-4">Prefer to reach out directly?</h4>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 hover:text-cyber-blue transition-colors duration-300">
          <span className="text-cyber-blue">📧</span>
          <span className="text-white/80">hello@devlaunch.co.in</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-cyber-purple transition-colors duration-300">
          <span className="text-cyber-purple">📱</span>
          <span className="text-white/80">+91 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-cyber-pink transition-colors duration-300">
          <span className="text-cyber-pink">📍</span>
          <span className="text-white/80">Bangalore, India</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
