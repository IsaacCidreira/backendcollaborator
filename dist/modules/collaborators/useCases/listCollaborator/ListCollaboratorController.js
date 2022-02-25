"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCollaboratorController = void 0;
class ListCollaboratorController {
    constructor(listCollaboratorUseCase) {
        this.listCollaboratorUseCase = listCollaboratorUseCase;
    }
    handle(request, response) {
        const all = this.listCollaboratorUseCase.execute();
        return response.json(all);
    }
}
exports.ListCollaboratorController = ListCollaboratorController;
