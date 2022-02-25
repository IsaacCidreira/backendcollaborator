"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCollaboratorUseCase = void 0;
class DeleteCollaboratorUseCase {
    constructor(collaboratorRepository) {
        this.collaboratorRepository = collaboratorRepository;
    }
    execute(id) {
        this.collaboratorRepository.delete(id);
    }
}
exports.DeleteCollaboratorUseCase = DeleteCollaboratorUseCase;
