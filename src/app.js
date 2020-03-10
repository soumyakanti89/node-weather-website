const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Soumya'
    })
});

// app.get('/help', (req, res) => {
//     res.send('Help page');
// });

// app.get('/about', (req, res) => {
//     res.send('About page');
// });

app.get('/weather', (req, res) => {
    res.send('Weather page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
