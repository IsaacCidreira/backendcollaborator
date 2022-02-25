"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collaboratorRoutes = void 0;
const express_1 = require("express");
const createCollaborator_1 = require("../modules/collaborators/useCases/createCollaborator");
const deleteCollaborator_1 = require("../modules/collaborators/useCases/deleteCollaborator");
const listCollaborator_1 = require("../modules/collaborators/useCases/listCollaborator");
const listUniqueCollaborator_1 = require("../modules/collaborators/useCases/listUniqueCollaborator");
const updateCollaborator_1 = require("../modules/collaborators/useCases/updateCollaborator");
const collaboratorRoutes = (0, express_1.Router)();
exports.collaboratorRoutes = collaboratorRoutes;
collaboratorRoutes.post('/', (request, response) => {
    return createCollaborator_1.createCollaboratorController.handle(request, response);
});
collaboratorRoutes.get('/', (request, response) => {
    return listCollaborator_1.listCollaboratorController.handle(request, response);
});
collaboratorRoutes.put('/:id', (request, response) => {
    return updateCollaborator_1.updateCollaboratorController.handle(request, response);
});
collaboratorRoutes.delete('/:id', (request, response) => {
    return deleteCollaborator_1.deleteCollaboratorController.handle(request, response);
});
collaboratorRoutes.get('/:id', (request, response) => {
    return listUniqueCollaborator_1.listUniqueCollaboratorController.handle(request, response);
});
