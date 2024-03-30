const PriceCalculator = require('../services/priceCalculator');

async function calculatePrice(req, res) {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const zoneLowerCase = zone.toLowerCase();
    console.log("🚀 ~ calculatePrice ~ zoneLowerCase:", zoneLowerCase)
    const itemTypeLowerCase = item_type.toLowerCase();
    try {
      
        const { total_price } = await PriceCalculator.calculatePrice({ zoneLowerCase, organization_id, total_distance, itemTypeLowerCase });
        
      
        res.json({total_price});
    } catch (error) {
        console.error('Error calculating price in pricing controller:', error);
        
       
        res.status(500).json({ error: 'Error calculating price' });
    }
}

module.exports = { calculatePrice };
