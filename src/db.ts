import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

config();

export const dataSourceOptions: DataSourceOptions | {
    
} = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true, // do not set it true in production application
    // factories: ['dist/**/*.js'],
};