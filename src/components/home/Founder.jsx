import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/Fundador.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Celso Perdomo</h3>

        <p>
          Hey, Soy Celso Perdomo, el fundador de PF Burger2.0.
          <br />
          Nosotros creamos las mejores hamburguesas a la parrilla.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
