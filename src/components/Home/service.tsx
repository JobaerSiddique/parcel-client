import { motion } from 'framer-motion';
import { 
  FaTruck, 
  FaMapMarkedAlt, 
  FaShieldAlt, 
  FaClock 
} from 'react-icons/fa';

const services = [
  {
    icon: <FaTruck className="w-12 h-12 text-green-600" />,
    title: "Fast Delivery",
    description: "Same day and next day delivery options available"
  },
  {
    icon: <FaMapMarkedAlt className="w-12 h-12 text-green-600" />,
    title: "Nationwide Coverage",
    description: "We deliver to all major cities and towns"
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-green-600" />,
    title: "Secure Handling",
    description: "Your packages are safe with our trained staff"
  },
  {
    icon: <FaClock className="w-12 h-12 text-green-600" />,
    title: "24/7 Support",
    description: "Our customer service is always available"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive courier services tailored to meet your delivery needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}