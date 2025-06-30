import React, { useState, useEffect } from 'react';
import { Menu, X, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
    label: string;
    href: string;
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navLinks: NavLink[] = [
        { label: 'Home', href: '#' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Pricing', href: '#pricing' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Animation variants for logo
    const logoVariants = {
        initial: { scale: 0.8, opacity: 0.5 },
        animate: {
            scale: [1, 1.05, 1],
            opacity: 1,
            transition: { duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' as const },
        },
    };

    // Animation variants for mobile menu
    const menuVariants = {
        closed: { y: '-100%', opacity: 0 },
        open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

  
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 z-50 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }  backdrop-blur-lg`}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="font-mars text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight"
                    variants={logoVariants}
                    initial="initial"
                    animate="animate"
                >
                    DevLaunch
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            className="text-gray-200 text-sm font-medium relative group"
                            whileHover={{ scale: 1.1, color: '#00f5ff' }}
                            transition={{ duration: 0.3 }}
                        >
                            {link.label}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => window.location.href = '#book'}
                        className="inline-block cursor-pointer z-50 relative"
                    >
                        <a
                            href="https://calendly.com/akshat2k24/new-meeting"
                            className="inline-flex items-center h-10 text-sm font-semibold px-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] transition-all duration-300 rounded-md text-white"
                        >
                            <Video className="w-4 h-4 mr-2" />
                            Book Now
                        </a>
                    </motion.div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-200 hover:text-cyan-400 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="md:hidden bg-gray-900/90 backdrop-blur-lg py-6 border-t border-cyan-500/30"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className="flex flex-col items-center space-y-6">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.label}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-200 text-base font-medium hover:text-cyan-400 transition-colors duration-300"
                                        onClick={toggleMenu}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                <Button
                                    className="cyber-button h-10 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] transition-all duration-300"
                                    onClick={() => {
                                        window.location.href = 'https://calendly.com/akshat2k24/new-meeting';
                                        toggleMenu();
                                    }}
                                >
                                    <Video className="w-4 h-4 mr-2" />
                                    Book Now
                                </Button>
                            </motion.li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />
        </header>
    );
};

export default Header;