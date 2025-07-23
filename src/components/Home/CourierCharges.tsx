import { motion } from 'framer-motion';
import { FaDollarSign } from 'react-icons/fa';
import { BsCheck2 } from 'react-icons/bs';

const pricingPlans = [
  {
    name: "Standard",
    price: "৳60",
    description: "Up to 1kg",
    features: ["3-5 day delivery", "Basic tracking", "Email notifications"]
  },
  {
    name: "Express",
    price: "৳120",
    description: "Up to 1kg",
    features: ["1-2 day delivery", "Real-time tracking", "SMS notifications"]
  },
  {
    name: "Premium",
    price: "৳200",
    description: "Up to 1kg",
    features: ["Same day delivery", "Priority handling", "Dedicated support"]
  }
];

export default function CourierCharges() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Courier Charges</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all your delivery needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow ${
                index === 1 ? "border-2 border-green-500 relative" : ""
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="flex items-center mb-6">
                <FaDollarSign className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-600"> / parcel</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <BsCheck2 className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium ${
                  index === 1
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "border border-green-600 text-green-600 hover:bg-green-50"
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}