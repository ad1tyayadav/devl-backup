import React, { useState, useEffect } from 'react';
import { Menu, X, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeader } from '@/context/HeaderContext';

interface NavLink {
    label: string;
    href: string;
}

const Header: React.FC = () => {
    const { isHeaderVisible } = useHeader();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showHeader, setShowHeader] = useState(false);

    const navLinks: NavLink[] = [
        { label: 'Home', href: '#' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Pricing', href: '#pricing' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowHeader(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation variants for logo
    const logoVariants = {
        hidden: { 
            x: -100, 
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
                duration: 0.5, 
                ease: "easeOut" 
            }
        },
        pulse: {
            scale: [1, 1.05, 1],
            transition: { 
                duration: 1.5, 
                ease: 'easeInOut', 
                repeat: Infinity, 
                repeatType: 'reverse' as const 
            }
        }
    };

    // Animation variants for header container
    const headerVariants = {
        hidden: { 
            x: '-100%',
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
            }
        }
    };

    // Animation variants for mobile menu
    const menuVariants = {
        closed: { 
            y: '-100%', 
            opacity: 0 
        },
        open: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                duration: 0.5, 
                ease: 'easeOut' 
            } 
        },
    };

    if (!isHeaderVisible) return null;

    return (
        <AnimatePresence>
            <motion.header
                className="glass-morphism fixed top-0 left-0 w-full z-50 backdrop-blur-lg"
                variants={headerVariants}
                initial="hidden"
                animate={showHeader ? "visible" : "hidden"}
                exit="hidden"
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="font-mars text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight"
                        variants={logoVariants}
                        initial="hidden"
                        animate={showHeader ? ["visible", "pulse"] : "hidden"}
                    >
                        DevLaunch
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="text-gray-200 text-sm font-medium relative group"
                                whileHover={{ scale: 1.1, color: '#00f5ff' }}
                                transition={{ duration: 0.3 }}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ 
                                    x: 0, 
                                    opacity: 1,
                                    transition: { 
                                        delay: index * 0.1 + 0.3,
                                        duration: 0.5 
                                    } 
                                }}
                            >
                                {link.label}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                        <motion.div
                            className="list-none relative z-20"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ 
                                x: 0, 
                                opacity: 1,
                                transition: { 
                                    delay: navLinks.length * 0.1 + 0.3,
                                    duration: 0.5 
                                } 
                            }}
                        >
                            <Button
                                className="inline-flex relative items-center h-10 text-sm font-semibold px-4 bg-transparent hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] transition-all duration-300 rounded-md text-white border border-cyan-400/50 hover:border-cyan-300"
                                onClick={() => {
                                    window.location.href = 'https://calendly.com/akshat2k24/new-meeting';
                                }}
                            >
                                <Video className="w-4 h-4 mr-2" />
                                Book Now
                            </Button>
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
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ 
                                            y: 0, 
                                            opacity: 1,
                                            transition: { 
                                                duration: 0.3 
                                            } 
                                        }}
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
                                <motion.li 
                                    className="list-none"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ 
                                        y: 0, 
                                        opacity: 1,
                                        transition: { 
                                            delay: 0.1,
                                            duration: 0.3 
                                        } 
                                    }}
                                >
                                    <Button
                                        className="h-10 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] transition-all duration-300"
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
            </motion.header>
        </AnimatePresence>
    );
};

export default Header;