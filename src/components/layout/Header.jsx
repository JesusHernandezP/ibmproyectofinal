import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <a href="/">
          <IoFastFoodOutline className="logo" />
        </a>
      </motion.div>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">Quiénes somos</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/me" title="Perfil">
              <FaUser />
            </Link>
            <Link to="/" title="Salir">
              <FiLogIn onClick={handleAuthentication} />
            </Link>
          </>
        ) : (
          <Link to="/login" title="Login">
            <FaUser onClick={handleAuthentication} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
