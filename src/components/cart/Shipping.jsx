import React, { useState } from "react";
import { State, Country } from "country-state-city";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Shipping = () => {
    const [shippingInfo, setShippingInfo] = useState({
        street: "",
        city: "",
        country: "",
        state: "",
        postalCode: "",
        phoneNumber: "",
    });
    const [confirmed, setConfirmed] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
        setConfirmed(true);
    };

    return (
        <section className="shipping">
            <main>
                <h1>Información de envío</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Calle y N.º</label>
                        <input
                            type="text"
                            name="street"
                            value={shippingInfo.street}
                            onChange={handleInputChange}
                            placeholder="Ingresa el nombre de la calle y el número"
                        />
                    </div>
                    <div>
                        <label>Ciudad</label>
                        <input
                            type="text"
                            name="city"
                            value={shippingInfo.city}
                            onChange={handleInputChange}
                            placeholder="Ingresa la ciudad"
                        />
                    </div>
                    <div>
                        <label>País</label>
                        <select>
                            <option value="">País</option>
                            {Country && Country.getAllCountries().map((i) => (
                                <option value={i.isoCode} key={i.isoCode}>
                                    {i.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Estado/Provincia</label>
                        <select>
                            <option value="">Estado/Provincia</option>
                            {State &&
                                State.getStatesOfCountry("ES").map((i) => (
                                    <option value={i.isoCode} key={i.isoCode}>
                                        {i.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <label>Código postal</label>
                        <input
                            type="number"
                            name="postalCode"
                            value={shippingInfo.postalCode}
                            onChange={handleInputChange}
                            placeholder="Ingresa tu PIN"
                        />
                    </div>
                    <div>
                        <label>N.º de teléfono</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={shippingInfo.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Ingresa tu número telefónico"
                        />
                    </div>
                    {/* ... otros campos de formulario */}
                    {confirmed ? (
                        <Popup
                        open={true}
                        onClose={() => setConfirmed(false)}
                        closeOnDocumentClick
                        contentStyle={{
                            maxWidth: "300px",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                            backgroundColor: "#fff",
                            color: "#333",
                            position: "absolute",
                            top: "40%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }}
                    >
                        <div>
                            ¡Has realizado tu pedido con éxito!
                            <br />
                            <Link to="/myorders" className="link">
                                Ir a Mis Pedidos
                            </Link>
                        </div>
                    </Popup>
                    ) : (
                        <button type="submit" className="link">
                            Confirmar pedido
                        </button>
                    )}
                </form>
            </main>
        </section>
    );
};

export default Shipping;
