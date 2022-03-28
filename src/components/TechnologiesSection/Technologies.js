import React from "react";
import technologies from "./technologiesPicturesData";

const Technologies = () => {
  console.log(technologies);
  return (
    <main>
      <div className="container" id="technologies">
        <h2 className="technology-title">Technologies</h2>
        <div className="technologies-list">
          {technologies.map((item) => {
            const { title, img, id } = item;
            return (
              <div key={id} className="technology-card">
                <div className="technology-img">
                  <img src={img} alt={title} className="img" />
                </div>
                <p className="technology-title-tag">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Technologies;
