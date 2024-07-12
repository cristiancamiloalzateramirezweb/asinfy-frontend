import React from "react";
import "./AlliesSection.css";
import { allies } from "../../data/allies";

export const AlliesSection = () => {
  return (
    <>
      <section className="allies-section">
        <div className="allies-content">
          {allies.map((allie) => {
            return (
              <a href={allie.website} target="_blank" rel="noreferrer" key={allie.id}>
                <img src={allie.image} alt={allie.name}></img>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};
