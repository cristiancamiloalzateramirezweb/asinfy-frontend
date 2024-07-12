import React from "react";
import "./ReasonSection.css";
import Square04 from "../../assets/images/square04.svg";
import Square05 from "../../assets/images/square05.svg";
import { reasons } from "../../data/reason";

export const ReasonSection = () => {
  return (
    <>
      <section className="reason-section" id="eligenos">
        <div className="reason-content">
          <span className="title-decor">¿Porqué escogernos?</span>
          <h3>Tres razones para elegir Asinfy</h3>
          <div className="card-list">
            {reasons.map((reason) => {
              return (
                <div className="card-item" key={reason.id}>
                  <img src={reason.image} alt={reason.title}></img>
                  <h4>{reason.title}</h4>
                  <span className="text">{reason.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <img src={Square04} alt="Asinfy" className="square04"></img>
        <img src={Square05} alt="Asinfy" className="square05"></img>
      </section>
    </>
  );
};
