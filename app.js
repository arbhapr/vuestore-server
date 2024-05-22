const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.APP_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, '/public/img')));

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'healthy'
    })
})

require('./app/routes/product.route')(app)
require('./app/routes/order.route')(app)

const db = require('./app/models')
db.mongoose
    .connect(db.url)
    .then((result) => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log('MongoDB not connected with error: ', err);
        process.exit();
    })

app.listen(PORT, () => {
    console.log('Server running on port http://localhost:' + PORT);
})