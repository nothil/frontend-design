import React, { useState, useEffect } from "react";
import "./brands.scss";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch brand data from your server
    fetch("http://localhost:3001/brands") // Replace with your actual endpoint
      .then((response) => response.json())
      .then((data) => {
        // Update state with fetched brand data
        setBrands(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to execute this effect only once

  return (
    <div className="cases-page">
      <h2>Brands</h2>
      <div className="cases-container">
        <div className="wrapper">
          {brands.map((brand, index) => {
            // Convert byte data to Blob
            const blob = new Blob([new Uint8Array(brand.image.data)], {
              type: "image/jpeg",
            });
            // Create object URL from Blob
            const imageUrl = URL.createObjectURL(blob);

            return (
              <div
                className={`box ${String.fromCharCode(97 + index)}`}
                key={index}
              >
                {/* Use the object URL as the image source */}
                <img src={imageUrl} alt={brand.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
