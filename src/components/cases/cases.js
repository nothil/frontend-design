import React from "react";
import "./cases.scss";

import olympian from "../../assets/olympian.jpeg";
import skhokho from "../../assets/skhokho.jpeg";
import dragon from "../../assets/dragon.jpeg";

const Cases = () => {
  const imageCards = [
    {
      imageSrc: olympian,
      text: "The Olympian",
      para: "The only olympian in the world to do her olympic in 2020",
    },
    {
      imageSrc: dragon,
      text: "The saving Jar",
      para: "The only olympian in the world to do her olympic in 2020",
    },
    {
      imageSrc: skhokho,
      text: "Skhokho seMali",
      para: "Helping South Africa became #cashCleva with Skhokho and Tymebank",
    },
  ];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const goToPrevious = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? imageCards.length - 1 : prevIndex - 1
  //   );
  // };

  // const goToNext = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === imageCards.length - 1 ? 0 : prevIndex + 1
  //   );
  // };
  return (
    <div className="home-page">
      <h3>Case studies</h3>

      <div className="grid-container">
        {imageCards.map((card, index) => (
          <div key={index} className="image-card">
            <img src={card.imageSrc} alt={`Imag}`} />
            <div className="image-text">
              <h2 className="text-head">{card.text}</h2>
              <p>{card.para}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>You'll be in good company</h3>
    </div>
  );
};

export default Cases;
