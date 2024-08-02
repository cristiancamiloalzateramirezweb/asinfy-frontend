import React, { useState, useEffect } from "react";
import "./ProcessSection.css";
import { processes } from "../../data/process";

export const ProcessSection = () => {
  const [selectedProcess, setSelectedProcess] = useState(processes[0]);
  const [filter, setFilter] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSelectedProcess(processes[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % processes.length;
        setSelectedProcess(processes[newIndex]);
        return newIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const filteredProcesses = processes.filter((process) =>
    process.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <section className="process-section" id="procesos">
        <div className="process-content">
          <h3>Nuestros procesos</h3>
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
      </section>
    </>
  );
};
