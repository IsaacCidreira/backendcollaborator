"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollaboratorUseCase = void 0;
class CreateCollaboratorUseCase {
    constructor(collaboratorRepository) {
        this.collaboratorRepository = collaboratorRepository;
    }
    execute({ name, cargo, telefone, url }) {
        this.collaboratorRepository.create({ name, cargo, telefone, url });
    }
}
exports.CreateCollaboratorUseCase = CreateCollaboratorUseCase;
