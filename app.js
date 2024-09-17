const express = require('express'); 
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;  // Define the port to listen on, default to 3000 if not specified in environment variables.
const LANDING = process.env.LANDING || 'index';  // Define the landing page template, default to 'index' if not specified in environment variables.

// Set up EJS template engine
app.set('view engine', 'ejs');  // Specify EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Set the directory where EJS files are located
const data = { message: `ver 1.0` };  // Define data to be passed to the EJS template

app.get('/', (req, res) => {
    // Render EJS template and pass data
    console.log('app accessed! ' + data.message)
    res.render(LANDING, data);  // Render the landing page template with the provided data
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  // Log the server URL once it's running
});
