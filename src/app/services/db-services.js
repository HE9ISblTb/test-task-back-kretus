import { allData } from "../../models/db/all-data.js";
import { avgData } from "../../models/db/avg-data.js";

export const createAllDataService = async (date, temperature, building) => {
    try {
        const data = await allData.create({
            date: date,
            building: building,
            temperature: temperature
        });
        return !!data;
    } catch (err) {
        throw err
    }
}

