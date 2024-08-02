import React from "react";
import "./ReasonSection.css";
import { reasons } from "../../data/reasons";

export const ReasonSection = () => {
  return (
    <>
      <section className="reason-section" id="eligenos">
        <div className="reason-content">
          <h3>¿Por qué elegirnos?</h3>
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
      </section>
    </>
  );
};
