
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Send, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const LetsTalk = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <div className="relative min-h-screen bg-dark-space overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-sora">Back to Home</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 glow-text">
                  Let's Talk
                </h1>
                <p className="text-white/80 font-sora text-lg leading-relaxed">
                  Ready to launch your next digital project? We're here to help bring your vision to life with cutting-edge technology and innovative design.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-white/80"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">Email</h3>
                    <p className="font-sora">hello@devlaunch.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-white/80"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">Phone</h3>
                    <p className="font-sora">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-white/80"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-pink to-neon-green rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">Location</h3>
                    <p className="font-sora">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-morphism p-8 rounded-2xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-sora">Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-sora">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-sora">Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-sora">Message *</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Tell us about your project..."
                            rows={5}
                            className="flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full cyber-button h-12 text-lg font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LetsTalk;
