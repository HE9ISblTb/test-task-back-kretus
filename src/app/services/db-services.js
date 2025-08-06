import { Op, Sequelize } from 'sequelize';

import { allData } from "../../models/db/all-data.js";
import { avgData } from "../../models/db/avg-data.js";

export const createAllDataService = async (array) => {
    try {
        const data = await allData.bulkCreate(array);
        return `Успешно добавили, ${data}`
    } catch (err) {
        throw err
    }
}

export const createAvgDataOfData = async (date) => {
    try {
        const allDataOfDate = await allData.findAll({
            attributes: ['temperature', 'building'],
            where: Sequelize.where(
                Sequelize.fn('DATE_TRUNC', 'day', Sequelize.col('date')),
                Op.eq,
                date
            ),
            raw: true
        });
        const arrayTemperature = allDataOfDate.map(item => {
            return item.temperature
        });
        let avgValueTemperature = arrayTemperature.reduce((value, item) => value += item, 0);
        if (avgValueTemperature && arrayTemperature) {
            const avgValue = await avgData.create({
                date_settlement: Date.now(),
                date_avg: date,
                temperature_avg: avgValueTemperature / arrayTemperature.length,
                use_temperature: arrayTemperature,
            });
            return {
                date: avgValue.date_avg,
                avg_temp: avgValue.temperature_avg,
                used_temp: avgValue.use_temperature
            }
        }
    } catch (err) {
        throw err
    }
}

export const getAllAvg = async () => {
    try {
        const allData = avgData.findAll({
            attributes: ['date_settlement', 'date_avg', 'temperature_avg', 'use_temperature'],
            raw: true
        });
        return allData
    } catch (err) {
        throw err
    }
}