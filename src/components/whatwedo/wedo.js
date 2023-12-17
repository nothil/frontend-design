import React from "react";
import "./wedo.scss";
import Icon from "../../assets/UX Icon.svg";
import AppDev from "../../assets/App Dev Icon.svg";
import Icons from "../../assets/icon.svg";

const WhatWedo = () => {
  return (
    <div className="wedo-page">
      <h3>Wha we do</h3>
      <h2>
        we offer a complete range of bespoke design and <br /> development
        services to help your turn your ideas into <br /> digital masterpiece
      </h2>
      <div className="grid-container">
        <div className="col-lg-4-md col-sm-12">
          <div className="card-icon">
            <img src={Icon} alt="" />
          </div>

          <div className="card-head">Web development</div>
          <p>
            Automating tasks and processes in your business streamlines
            workflows, increases productivity and in some instances gives you a
            competitive advantage in the market. Our team analyses your business
            and the use case for the software before development and roll out to
            ensure that the intended goals are realized.
          </p>
        </div>

        <div className="col-lg-4-md col-sm-12">
          <div className="card-icon">
            <img src={AppDev} alt="" />
          </div>

          <div className="card-head">User experience & design</div>
          <p>
            Automating tasks and processes in your business streamlines
            workflows, increases productivity and in some instances gives you a
            competitive advantage in the market. Our team analyses your business
            and the use case for the software before development and roll out to
            ensure that the intended goals are realized.
          </p>
        </div>
        <div className="col-lg-4-md col-sm-12">
          <div className="card-icon">
            <img src={Icons} alt="" />
          </div>

          <div className="card-head">Mobile app development</div>
          <p>
            Automating tasks and processes in your business streamlines
            workflows, increases productivity and in some instances gives you a
            competitive advantage in the market. Our team analyses your business
            and the use case for the software before development and roll out to
            ensure that the intended goals are realized.
          </p>
        </div>

        <div className="col-lg-4-md col-sm-12">
          <div className="card-icon">
            <img src={Icon} alt="" />
          </div>

          <div className="card-head">Blockchain solution</div>
          <p>
            Automating tasks and processes in your business streamlines
            workflows, increases productivity and in some instances gives you a
            competitive advantage in the market. Our team analyses your business
            and the use case for the software before development and roll out to
            ensure that the intended goals are realized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWedo;
