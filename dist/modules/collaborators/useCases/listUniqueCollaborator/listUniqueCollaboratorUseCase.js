"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUniqueCollaboratorUseCase = void 0;
class ListUniqueCollaboratorUseCase {
    constructor(collaboratorRepository) {
        this.collaboratorRepository = collaboratorRepository;
    }
    execute(id, url) {
        const collaboratorExists = this.collaboratorRepository.findById(id);
        if (!collaboratorExists) {
            throw new Error('User not found');
        }
        const collaborator = this.collaboratorRepository.listOne(id);
        return collaborator;
    }
}
exports.ListUniqueCollaboratorUseCase = ListUniqueCollaboratorUseCase;
