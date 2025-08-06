import { Sequelize, DataTypes } from 'sequelize';
import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile('./src/config/config.json', 'utf8'));

const sequelize = new Sequelize(`postgres://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`, {
    logging: false,
    timezone: '+07:00',
});

export const allData = sequelize.define('all_data', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    building: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    temperature: {
        type: DataTypes.REAL,
        allowNull: false
    }
},
    {
        timestamps: false
    });