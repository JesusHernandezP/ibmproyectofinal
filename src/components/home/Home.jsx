import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder"
import Menu from "./Menu";



const Home = () => {
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
        <>
            <section className="home">
                <div>
                    <motion.h1 {...options}>PF burgers</motion.h1>
                    <motion.p
                        {...options}
                        transition={{ delay: 0.2 }} 
                    >
                        Autenticamente Asadas al carbon
                    </motion.p>
                </div>
                
                <motion.a
                    href="#menu"
                    initial={{
                        y: "-100%",
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{ delay: 0.4 }} 
                >
                    Nuestro                     Menú
                </motion.a>
                
            </section>
            <section>
                <Menu />
            </section>
            <section>
                <Founder />
            </section>
            

        </>
    );
};

export default Home;




