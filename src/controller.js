import { createAllDataService, createAvgDataOfData, getAllAvg } from "./app/services/db-services.js";
import { preparationData } from "./app/services/service.js";

const handleResponse = (res, status, message, results = null) => {
    res.status(status).json({
        status,
        message,
        results,
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

export const avgData = async (req, res, next) => {
    const { date } = req.query
    try {
        const avgDataOfDate = await createAvgDataOfData(date);
        handleResponse(res, 200, "Данные добавлены в БД", avgDataOfDate);
    } catch (err) {
        next(err);
    }
}

export const avgAllData = async (req, res, next) => {
    try {
        const reports = await getAllAvg();
        handleResponse(res, 200, "Данные добавлены в БД", reports);
    } catch (err) {
        next(err)
    }
}