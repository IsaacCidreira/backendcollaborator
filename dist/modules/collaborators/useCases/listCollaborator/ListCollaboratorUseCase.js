"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCollaboratorUseCase = void 0;
class ListCollaboratorUseCase {
    constructor(collaboratorRepository) {
        this.collaboratorRepository = collaboratorRepository;
    }
    execute() {
        const collaborator = this.collaboratorRepository.list();
        return collaborator;
    }
}
exports.ListCollaboratorUseCase = ListCollaboratorUseCase;
