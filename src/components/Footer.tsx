import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterLink {
    label: string;
    href: string;
}

const Footer: React.FC = () => {
    const navLinks: FooterLink[] = [
        { label: 'Home', href: '#' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Pricing', href: '#pricing' },
    ];

    const socialLinks: FooterLink[] = [
        { label: 'Instagram', href: 'https://www.instagram.com/devlaunch.in?igsh=MWZtcjY0M3BkYnpyMQ==' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/devlaunch-sutraka' },
        { label: 'Email', href: 'mailto:reachus@devlaunch.co.in' },
    ];

    return (
        <footer className="relative glass-morphism py-12 border-t border-cyan-500/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-mars text-white tracking-tight">DevLaunch</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering your future with cutting-edge solutions.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-cyan-400">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-cyan-400">Connect With Us</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                    aria-label={link.label}
                                >
                                    {link.label === 'Instagram' && <Instagram className="w-6 h-6" />}
                                    {link.label === 'LinkedIn' && <Linkedin className="w-6 h-6" />}
                                    {link.label === 'Email' && <Mail className="w-6 h-6" />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700/50 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} DevLaunch. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-cyber-purple/10 to-transparent rounded-full blur-3xl" />
        </footer>
    );
};

export default Footer;