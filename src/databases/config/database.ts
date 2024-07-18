import { Sequelize } from 'sequelize';
import 'dotenv/config';


const {  DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env;

export const sequelize = new Sequelize(

    {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: 'mysql',
        logging: false
    }

);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connected succefully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default testConnection;