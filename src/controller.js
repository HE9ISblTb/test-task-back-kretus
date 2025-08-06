import { createAllDataService } from "./app/services/db-services.js";
import { preparationData } from "./app/services/service.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createAllData = async (req, res, next) => {
    const arrayData = await preparationData(req.body);
    try {
        const newData = await createAllDataService(arrayData);
        handleResponse(res, 200, "Данные добавлены в БД", newData);
    } catch (err) {
        next(err);
    }
}