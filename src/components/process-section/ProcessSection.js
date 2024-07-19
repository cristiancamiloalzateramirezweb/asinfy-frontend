import React, { useState, useEffect } from "react";
import "./ProcessSection.css";
import { processes } from "../../data/process";
import Square08 from "../../assets/images/square08.svg";
import Square09 from "../../assets/images/square09.svg";

export const ProcessSection = () => {
  const [selectedProcess, setSelectedProcess] = useState(processes[0]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setSelectedProcess(processes[0]);
  }, []);

  const filteredProcesses = processes.filter((process) =>
    process.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <section className="process-section" id="procesos">
        <div className="process-content">
          <span className="title-decor">Nuestros Procesos</span>
          <h3>Los procesos de Asincode</h3>
          <div className="process-container">
            <div className="process-list">
              {filteredProcesses.map((process) => (
                <div
                  key={process.id}
                  className={`process-item ${
                    selectedProcess?.id === process.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedProcess(process)}
                >
                  <span className="icon"><i className={process.icon}></i></span>
                  <span className="text">{process.title}</span>
                </div>
              ))}
            </div>
            {selectedProcess && (
              <div className="process-details">
                <div className="text-details">
                <p>{selectedProcess.text}</p>
                </div>
                <div className="image-details">
                <img src={selectedProcess.image} alt={selectedProcess.title}></img> 
                </div>
              </div>
            )}
          </div>
        </div>
        <img src={Square08} alt="Asincode" className="square08"></img>
        <img src={Square09} alt="Asincode" className="square09"></img>
      </section>
    </>
  );
};
