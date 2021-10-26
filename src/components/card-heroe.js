import React from "react";

export const CardHeroe = ({ superhero, id, alter_ego, first_appearance }) => {
  return (
    <div className="flexItem card">
      <img
        src={`./assets/heroes/${id}.jpg`}
        className="card-img-top"
        alt={superhero}
      />
      <div className="card-body">
        <h5 className="card-title">
          {superhero} / {alter_ego}
        </h5>
        <p className="card-text">{first_appearance}</p>
        <a href="#" className="btn btn-primary">
          {" "}
          See more{" "}
        </a>
      </div>
    </div>
  );
};
