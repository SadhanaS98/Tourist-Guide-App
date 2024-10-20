const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Serve static files (like HTML, CSS, and client-side JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
