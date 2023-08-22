import React from "react";

const OrderDetails = () => {
    const storedShippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));

    return (
        <section className="orderDetails">
            <main>
                <h1>Información del pedido</h1>
                <div>
                    <h2>Envío</h2>
                    <p>
                         {storedShippingInfo && storedShippingInfo.street}
                    </p>
                    

                    <h2>Contacto</h2>
                    
                    <p>
                        +34 {storedShippingInfo && storedShippingInfo.phoneNumber}
                    </p>
                </div>
                <div>
                    <h2>Estado</h2>
                    <p>
                        {"En curso"}
                    </p>
                    
                </div>
                <div>
                <h1>Pago</h1>
                    <p>
                        <b>Método de pago</b>
                        {"Pago contra entrega"}
                    </p>
                </div>
                <article>
                    <h1>Artículos</h1>
                    <div>
                        <h4>Hamburguesa con queso</h4>
                        <div>
                            <span>{1}</span> x € <span>{'3, 30'}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Hamburguesa vegetariana con queso</h4>
                        <div>
                            <span>{1}</span> x € <span>{'4, 50'}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Hamburguesa con queso y patatas fritas</h4>
                        <div>
                            <span>{1}</span> x € <span>{'6, 10'}</span>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Subtotal
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            € {'13, 90'}
                        </div>
                    </div>
                </article>
                <div>
                    <h1>Total</h1>
                    <p>
                        <b>Subtotal</b>€ {'13, 90'}
                    </p>
                    <p>
                        <b>Costos de envío</b>€ {'2, 30'}
                    </p>
                    <p>
                        <b>IVA</b>€ {'2, 92'}
                    </p>
                    <p>
                        <b>Importe total</b>€ {}
                    </p>
                </div>
            </main>
        </section>
    );
};

export default OrderDetails;
