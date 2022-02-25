"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCollaboratorController = void 0;
const CollaboratorRepository_1 = require("../../repositories/implementation/CollaboratorRepository");
const DeleteCollaboratorController_1 = require("./DeleteCollaboratorController");
const DeleteCollaboratorUseCase_1 = require("./DeleteCollaboratorUseCase");
const collaboratorRepository = CollaboratorRepository_1.CollaboratorRepository.getInstance();
const deleteCollaboratorUseCase = new DeleteCollaboratorUseCase_1.DeleteCollaboratorUseCase(collaboratorRepository);
const deleteCollaboratorController = new DeleteCollaboratorController_1.DeleteCollaboratorController(deleteCollaboratorUseCase);
exports.deleteCollaboratorController = deleteCollaboratorController;
