import { Sequelize, DataTypes } from 'sequelize';
import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile('./src/config/config.json', 'utf8'));

const sequelize = new Sequelize(`postgres://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`, {
    logging: false
});

export const avgData = sequelize.define('avg_data', {
    date_settlement: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_avg: {
        type: DataTypes.DATE,
        allowNull: false
    },
    temperature_avg: {
        type: DataTypes.REAL,
        allowNull: false
    },
    use_temperature: {
        type: Sequelize.ARRAY(DataTypes.REAL),
    }
}, {
    timestamps: false
});