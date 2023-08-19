import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Hamburguesería</h2>
                <p>Intentamos darte el mejor sabor posible.</p>
        
            </div>
            <aside>
                <h4>Síguenos</h4>
                <a href="https://youtube.com/xyz">
                    <AiFillYoutube />
                </a>
                <a href="https://instagram.com/xyz">
                    <AiFillInstagram />
                </a>
                <a href="https://instagram.com/xyz">
                    <AiFillGithub />
                </a>
            </aside>
                <strong>Todos los derechos reservados @hamburgueseria</strong>
                
        </footer>
    );
};
export default Footer;
