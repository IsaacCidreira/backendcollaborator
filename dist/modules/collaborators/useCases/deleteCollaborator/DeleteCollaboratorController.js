"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCollaboratorController = void 0;
class DeleteCollaboratorController {
    constructor(deleteCollaboratorUseCase) {
        this.deleteCollaboratorUseCase = deleteCollaboratorUseCase;
    }
    handle(request, response) {
        const { id } = request.params;
        this.deleteCollaboratorUseCase.execute(id);
        return response.status(201).send();
    }
}
exports.DeleteCollaboratorController = DeleteCollaboratorController;
