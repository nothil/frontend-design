import React, { useState, useEffect } from "react";
import "./brands.scss";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch brand data from the server
    fetch("http://localhost:3001/brands")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="cases-page">
      <h2>Trusted by leading Brands</h2>
      <div className="brands-container">
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
                className={` wrapper ${String.fromCharCode(97 + index)}`}
                key={index}
              >
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
