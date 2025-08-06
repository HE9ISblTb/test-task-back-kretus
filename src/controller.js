import { createAllDataService } from "./app/services/db-services.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createAllData = async (req, res, next) => {
    const { date, temperature, building } = req.body;
    //Добавить обработку массива.
    try {
        const newData = await createAllDataService(date, temperature, building);
        handleResponse(res, 200, "Данные добавлены в БД", newData);
    } catch (err) {
        next(err);
    }
}