const { Server } = require('./Server');
const { Routes } = require('./routes/routes');

const app = new Server().getApp();
const route = new Routes(app);

route.getRoutes();

module.exports = { app };
