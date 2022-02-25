"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUniqueCollaboratorController = void 0;
class ListUniqueCollaboratorController {
    constructor(listUniqueCollaboratorUseCase) {
        this.listUniqueCollaboratorUseCase = listUniqueCollaboratorUseCase;
    }
    handle(request, response) {
        const { id } = request.params;
        let { url } = request.body;
        if (url === '') {
            url = 'https://freesvg.org/img/abstract-user-flat-4.png';
        }
        const updateCollaborator = this.listUniqueCollaboratorUseCase.execute(id, url);
        response.status(201).json(updateCollaborator);
    }
}
exports.ListUniqueCollaboratorController = ListUniqueCollaboratorController;
