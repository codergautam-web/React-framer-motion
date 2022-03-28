import React from "react";
import { motion } from "framer-motion";
const containerVarients = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass:  0.4,
      dumping: 8,
    },
    transition: {
      type: 'spring',
      delay: 0.5,
      when: "beforeChildren"
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </div>
    </motion.div>
  );
};

export default Order;
