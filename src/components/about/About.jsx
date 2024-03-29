import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/Fundador.jpg";
const About = () => {
    return (
        <section className="about">
            <main>
                <h1>Quiénes somos</h1>
                <article>
                    <h4>PF Burger2.0</h4>
                    <p>
                        Esto es PF Burger2.0. El lugar con las hamburguesas más
                        sabrosas del planeta.
                    </p>
                    <p>
                        Explora nuestra oferta de comida y hamburguesas. Haz clic a
                        continuación para ver el menú
                    </p>
                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>
                <div>
                    <h2>Fundador</h2>
                    <article>
                        <div>
                            <img src={me} alt="Fundador" />
                            <h3>Celso Perdomo</h3>
                        </div>
                        <p>
                            Soy Celso Perdomo, el fundador de PF Burger2.0
                        </p>
                    </article>
                </div>
            </main>
        </section>
    );
};
export default About;
