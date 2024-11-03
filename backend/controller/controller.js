const db = require('../dbconnect'); // Ensure the path to dbconnect is correct

// Function to add profile data to the database
exports.Adddata = (req, res) => {
  // Extract data from the request body
  const { first_name, last_name, phone_number, best_time } = req.body;

  // Validate that all required fields are present
  if (!first_name || !last_name || !phone_number || !best_time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Define the SQL query to insert data into the tbl_profiles table
  const sqlQuery = 'INSERT INTO registrations (first_name, last_name, phone_number, best_time) VALUES (?, ?, ?, ?)';

  // Execute the query with the provided data
  db.query(sqlQuery, [first_name, last_name, phone_number , best_time], (err, result) => {
    if (err) {
      console.error('Error while inserting data into tbl_profile:', err);
      return res.status(500).json({ error: 'Failed to insert data into the database' });
    }

    // Send a success response back to the client
    res.status(201).json({ message: 'Profile data added successfully!', insertedId: result.insertId });
  });
};
