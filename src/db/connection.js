const dotenv = require('dotenv');
dotenv.config();
const { Sequelize } = require('sequelize');
const fs = require('fs');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    logging: false
});


(async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('All models were synchronized. Connected Successfully');
        
    
        // await insertData();
    } catch (error) {
        console.error('Unable to synchronize models with the database:', error);
    }
})();

async function insertData() {
    try {
      
        const sqlData = fs.readFileSync('query.sql', 'utf8');

        // Execute the SQL commands
        await sequelize.query(sqlData);

        console.log('Data insertion successful.');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

module.exports = sequelize;
