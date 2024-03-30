const express = require('express');
const dotenv = require('dotenv');
const pricingRoutes = require('./routes/Pricing.routes');
const swaggerSetup = require('./swaggerSetup')

dotenv.config();


const app = express();


app.use(express.json());


app.use('/pricing', pricingRoutes);

swaggerSetup(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
