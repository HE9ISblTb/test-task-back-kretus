export const preparationData = async (body) => {
    try {
        const validateArray = body.map(item => {
           return {
               date: new Date(`${item.date}, ${item.time}`),
               temperature: item.temperature,
               building: item.building
           }
        });
        return validateArray
    } catch (err) {
        throw err
    }
}