import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Rocket, Users } from 'lucide-react';


  const stats = [
    { icon: Users, label: "Active Users", value: "5K+", color: "from-cyan-500 to-blue-600", delay: 0.1 },
    { icon: DollarSign, label: "Projects Completed", value: "15+", color: "from-emerald-500 to-teal-600", delay: 0.2 },
    { icon: Rocket, label: "Startups Supported", value: "20+", color: "from-rose-500 to-pink-600", delay: 0.3 },
    { icon: Rocket, label: "SaaS Products", value: "4", color: "from-amber-500 to-orange-600", delay: 0.4 }
  ];

  const revenueData = [
    { month: 'Nov', revenue: 15000, users: 1000 },
    { month: 'Dec', revenue: 10000, users: 2000 },
    { month: 'Jan', revenue: 25000, users: 1000 },
    { month: 'Feb', revenue: 40000, users: 2000 },
    { month: 'Mar', revenue: 50000, users: 3500 },
    { month: 'Apr', revenue: 60000, users: 5000 },
    { month: 'May', revenue: 120000, users: 7000 },
    { month: 'Jun', revenue: 160000, users: 8500 }
  ];

function TractionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-20"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-4 sm:mb-6">
                TRACTION
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: stat.delay,
                      type: "spring",
                      bounce: 0.4
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                    
                    <div className="relative bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/10 group-hover:border-emerald-400/50 transition-all duration-500 text-center">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={18} className="text-white" />
                      </div>
                      <motion.h3 
                        className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: stat.delay + 0.3 }}
                      >
                        {stat.value}
                      </motion.h3>
                      <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-emerald-400/50 transition-all duration-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Revenue Growth Trajectory</h3>
              <div className="h-64 sm:h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="month" stroke="#ffffff60" fontSize={12} />
                    <YAxis stroke="#ffffff60" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        border: '1px solid #06b6d4',
                        borderRadius: '12px',
                        backdropFilter: 'blur(20px)',
                        fontSize: '14px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#06b6d4" 
                      fillOpacity={1} 
                      fill="url(#revenueGradient)" 
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </section>
  )
}

export default TractionSection