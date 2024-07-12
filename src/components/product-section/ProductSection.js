import React from "react";
import "./ProductSection.css";
import { products } from "../../data/products";
import Square06 from "../../assets/images/square06.svg";
import Square07 from "../../assets/images/square07.svg";

export const ProductSection = () => {
  return (
    <>
      <section className="product-section" id="productos">
        <div className="product-content">
          <span className="title-decor">Texto aqui!!!</span>
          <h3>Nuestros Productos</h3>
          <div className="product-list">
            {products.map((product) => {
              return (
                <div className="product-item" key={product.id}>
                  <div className="card-icon">
                    <span className="icon">
                      <i className={product.icon}></i>
                    </span>
                  </div>
                  <div className="card-text">
                    <h4>{product.title}</h4>
                    <p>{product.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img src={Square06} alt="Asinfy" className="square06"></img>
        <img src={Square07} alt="Asinfy" className="square07"></img>
      </section>
    </>
  );
};
