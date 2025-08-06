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

