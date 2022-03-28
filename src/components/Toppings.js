import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


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
      stiffness: 120,
      delay: 0.5,
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container" variants={containerVarients} initial="hidden" animate="visible">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
              key={topping} 
              onClick={() => addTopping(topping)}
              initial={{x: 50}}
              animate={{x: 0}}
              whileHover={{
                scale: 1.2,
                color: 'green',
                originX: 0
              }}
              transition={{type: 'spring', stiffness: 200}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;