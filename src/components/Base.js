import React from "react";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

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


const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
}

const nextButtonVariants = {
  hidden: {},
  visible: {},
}


const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              whileHover={{
                scale: 1.2,
                color: "green",
                originX: 0,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
             className="nextButton"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
