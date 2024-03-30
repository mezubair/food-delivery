const PriceCalculator = require('../services/priceCalc');

async function calculateTotalPrice(req, res) {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const zoneLowerCase = zone.toLowerCase();
    const itemTypeLowerCase = item_type.toLowerCase();
    try {
      
        const { total_price } = await PriceCalculator.calculatePrice({ zoneLowerCase, organization_id, total_distance, itemTypeLowerCase });
        
      
        res.status(200).json({status: "sucess" ,total_price});
    } catch (error) {
        console.error('Error calculating price in pricing controller:', error);
        
       
        res.status(500).json({ error: 'Error calculating price : Invalid field names' });
    }
}

module.exports = { calculateTotalPrice };
