const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// need this middleware function to access front end code
app.use(express.static('public'));
// need both middleware functions(below) to be set up everytime you create a server that is looking to accept POST data.
// parse incoming string to array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//use api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
