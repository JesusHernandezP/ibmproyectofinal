import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import Popup from 'reactjs-popup';

const Contact = () => {
    return (
        <section className="contact">
            <motion.form
                initial={{
                    x: "-100vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}
            >
                <h2>Contáctanos</h2>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo electrónico" />
                <textarea placeholder="Tu mensaje..." cols="30" rows="10"></textarea>
                <Popup
                    trigger={<button type="button">Enviar</button>}
                    position="top center"
                    closeOnDocumentClick
                >
                    <div style={{
                        color: "red",
                        transform: 'translate(0, -100%)',
                        backgroundColor: '#fff',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                    }}>
                        ¡Gracias por contactarnos! En breve te responderemos.
                    </div>
                </Popup>
            </motion.form>
            <motion.div
                className="formBorder"
                initial={{
                    x: "100vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    initial={{
                        y: "-100vh",
                        x: "50%",
                        opacity: 0,
                    }}
                    animate={{
                        x: "50%",
                        y: "-50%",
                        opacity: 1,
                    }}
                    transition={{ delay: 1 }}
                >
                    <img src={burger} alt="Hamburguesa" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
