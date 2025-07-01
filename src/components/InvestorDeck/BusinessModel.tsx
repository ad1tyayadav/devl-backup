import { motion } from "framer-motion"
import { DollarSign } from "lucide-react"

function BusinessModel() {
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 sm:mb-6">
                BUSINESS MODEL
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Technical Consultancy",
                  price: "One-Time Pay",
                  features: ["Urgent fixes or audits", "Custom feature builds", "Architecture reviews"],
                  color: "from-blue-500 to-cyan-500",
                  featured: false
                },
                {
                  title: "MVP Development",
                  price: "Equity-Based",
                  features: ["Pre-funded startups", "Founders with tight budgets", "Scalable prototypes"],
                  color: "from-purple-500 to-pink-500",
                  featured: true
                },
                {
                  title: "SaaS Solutions",
                  price: "Subscription-Based",
                  features: ["Recurring revenue apps", "Automated workflows", "Long-term tech partners"],
                  color: "from-emerald-500 to-teal-500",
                  featured: false
                }
              ].map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {model.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold text-white">
                        RECOMMENDED
                      </div>
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${model.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                  
                  <div className={`relative bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border ${model.featured ? 'border-purple-500/50' : 'border-white/10'} group-hover:border-cyan-400/50 transition-all duration-500 h-full`}>
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <DollarSign size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{model.title}</h3>
                    <p className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${model.color} bg-clip-text text-transparent mb-4 sm:mb-6`}>
                      {model.price}
                    </p>
                    
                    <ul className="space-y-3">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.color} mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default BusinessModel