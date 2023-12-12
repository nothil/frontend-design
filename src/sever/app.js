const express = require("express");
const mysql = require("mysql");
const fs = require("fs");
const { log } = require("console");
const { Pool } = require("pg");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

//*********************** */
// Connect to DB

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "pass",
  port: 5432, // Specify your port here (5432 for PostgreSQL by default)
});

// Function to initialize and insert data into the database
async function initializeDatabase() {
  let client;
  try {
    client = await pool.connect();

    // Check if the brands table exists
    console.log("Connected to the database");
    const tableExists = await client.query(
      "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'brands')"
    );

    console.log("Checking if table exists");

    if (!tableExists.rows[0].exists) {
      // Create the brands table if it doesn't exist
      console.log("Table does not exist: creating....");
      await client.query(`
          CREATE TABLE brands (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image BYTEA
          )
        `);

      function getImagePath(imageFilename) {
        return path.join(__dirname, imageFilename);
      }

      // Insert sample data (replace this with your data)
      const sampleBrands = [
        { name: "Brand 1", imagePath: getImagePath("skhokho.jpeg") },
        // Add more brands and image paths as needed
      ];

      // Insert each brand into the database
      for (const brand of sampleBrands) {
        const imageBuffer = fs.readFileSync(brand.imagePath);
        await client.query("INSERT INTO brands (name, image) VALUES ($1, $2)", [
          brand.name,
          imageBuffer,
        ]);
      }

      console.log(
        "Initialization complete: Brands inserted into the database."
      );
    } else {
      console.log("Database already initialized.");
    }
  } catch (error) {
    console.error("Initialization error:", error);
  } finally {
    if (client) {
      client.release(); // Release the client back to the pool
    }
  }
}

// Call the initialization function
initializeDatabase();
//
//
//
//
// FETCHING DATA FROM THE DATABASE
app.get("/brands", async (req, res) => {
  try {
    const { filter, sort } = req.query;

    let query = "SELECT * FROM brands";

    if (filter) {
      console.log("Filtering");
      // Add filtering logic based on a specific condition, for example, filtering by brand name
      query += ` WHERE name ILIKE '%${filter}%'`; // Change 'name' to your specific column
    }

    if (sort) {
      // Add sorting logic based on a specific column
      query += ` ORDER BY ${sort}`; // Change '${sort}' to your specific column to sort by
    }

    const client = await pool.connect();
    const result = await client.query(query);
    const brands = result.rows;
    client.release();

    res.json(brands);
  } catch (error) {
    console.error("Error fetching brands:", error);
    res.status(500).json({ error: "Failed to fetch brands" });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
