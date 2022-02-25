"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCollaboratorUseCase = void 0;
class UpdateCollaboratorUseCase {
    constructor(collaboratorRepository) {
        this.collaboratorRepository = collaboratorRepository;
    }
    execute({ id, name, cargo, telefone, url }) {
        const collaboratorExists = this.collaboratorRepository.findById(id);
        if (!collaboratorExists) {
            throw new Error('User not found');
        }
        this.collaboratorRepository.update({ id, name, cargo, telefone, url });
    }
}
exports.UpdateCollaboratorUseCase = UpdateCollaboratorUseCase;
