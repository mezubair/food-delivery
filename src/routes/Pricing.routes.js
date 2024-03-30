const express = require('express');
const {calculateTotalPrice} = require('../controllers/pricing.controller');

const router = express.Router();


/**
 * @swagger
 * /pricing/calculate-price:
 *  post:
 *     summary: Calculate price for an item
 *     description: Calculate the price for an item based on provided parameters.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *               organization_id:
 *                 type: integer
 *               total_distance:
 *                 type: number
 *               item_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully calculated price.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 */


router.post('/calculate-price',calculateTotalPrice);


module.exports = router;
