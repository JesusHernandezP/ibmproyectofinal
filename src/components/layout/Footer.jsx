import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>PF Burger 2.0</h2>
                <p>Nuestro sabor a la parrila es inigualable.</p>
        
            </div>
            <aside>
                <h4>Síguenos</h4>
                <a href="https://youtube.com/xyz">
                    <AiFillYoutube />
                </a>
                <a href="https://instagram.com/pfburger2.0?igshid=MzRlODBiNWFlZA==">
                    <AiFillInstagram />
                </a>
                <a href="https://github.com/JesusHernandezP">
                    <AiFillGithub />
                </a>
            </aside>
                <strong>Todos los derechos reservados @pfburger2.0</strong>
                
        </footer>
    );
};
export default Footer;
