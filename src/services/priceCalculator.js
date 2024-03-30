const Pricing = require('../models/Pricing');

async function calculatePrice({ zoneLowerCase, organization_id, total_distance, itemTypeLowerCase }) {
    try {

        const pricing = await Pricing.findOne({
            where: { organization_id, zone : zoneLowerCase}
            
        });
        console.log("🚀 ~ calculatePrice ~ pricing:", pricing)
       

        if (!pricing) {
            throw new Error(`Pricing information not found for zone: ${zoneLowerCase} and organization_id: ${organization_id}`);
        }

        let total_price = JSON.parse(pricing.fix_price);
       /// console.log(typeof total_price)
        if (total_distance > pricing.base_distance_in_km) {
            const additional_distance = total_distance - pricing.base_distance_in_km;
          
            const km_price = itemTypeLowerCase === 'Perishable'
                ? 1.5
                : 1;
            //console.log(typeof km_price);
           // console.log(typeof total_price)
            total_price   += additional_distance * km_price;
          
        }
        
        return { total_price: total_price * 100};
    } catch (error) {
        console.error('Error calculating price:', error);
        throw new Error('Error calculating price');
    }
}

module.exports = { calculatePrice };
