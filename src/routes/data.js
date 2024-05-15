const DataRoutes = require("express").Router();
const data = require("../controllers/data");

DataRoutes.get(
    "/data/all",
    data.getAllData,
);
DataRoutes.get(
    "/data/:id",
    data.getDataById,
);
DataRoutes.post(
    "/data/add",
    data.createData,
);
DataRoutes.patch(
    "/data/update/:id",
    data.updateDataById,
);
DataRoutes.delete(
    "/data/delete/:id",
    data.deleteDataById,
);

module.exports = DataRoutes;