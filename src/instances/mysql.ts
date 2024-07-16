import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(

    {
        dialect: 'mysql',
        host: process.env.MYSQL_HOST as string,
        password: process.env.MYSQL_PASSWORD as string,
        username: process.env.MYSQL_USER as string,
        database: process.env.MYSQL_DATABASE as string,
        logging: false,
        port: parseInt(process.env.MYSQL_PORT as string),
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