"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const collaborator_routes_1 = require("./collaborator.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/collaborator', collaborator_routes_1.collaboratorRoutes);
