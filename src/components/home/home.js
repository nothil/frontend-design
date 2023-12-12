import React from "react";
import "./home.scss";
import hero from "../../assets/confidence.jpeg";

const Home = () => {
  return (
    <div className="home-page">
      <img src={hero} alt="" />

      <div className="image-text">
        <h2>Live with confidence</h2>
        <p>Jose Marihno brings confidence in south africa</p>

        <button>View project</button>
      </div>
    </div>
  );
};

export default Home;
