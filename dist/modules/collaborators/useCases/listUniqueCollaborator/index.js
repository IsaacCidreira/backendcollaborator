"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUniqueCollaboratorController = void 0;
const CollaboratorRepository_1 = require("../../repositories/implementation/CollaboratorRepository");
const listUniqueCollaboratorController_1 = require("./listUniqueCollaboratorController");
const listUniqueCollaboratorUseCase_1 = require("./listUniqueCollaboratorUseCase");
const collaboratorRepository = CollaboratorRepository_1.CollaboratorRepository.getInstance();
const listUniqueCollaboratorUseCase = new listUniqueCollaboratorUseCase_1.ListUniqueCollaboratorUseCase(collaboratorRepository);
const listUniqueCollaboratorController = new listUniqueCollaboratorController_1.ListUniqueCollaboratorController(listUniqueCollaboratorUseCase);
exports.listUniqueCollaboratorController = listUniqueCollaboratorController;
