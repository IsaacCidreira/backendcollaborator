"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCollaboratorController = void 0;
class UpdateCollaboratorController {
    constructor(updateCollaboratorUseCase) {
        this.updateCollaboratorUseCase = updateCollaboratorUseCase;
    }
    handle(request, response) {
        const { id } = request.params;
        let { name, cargo, telefone, url } = request.body;
        if (url === '') {
            url = 'https://freesvg.org/img/abstract-user-flat-4.png';
        }
        this.updateCollaboratorUseCase.execute({ id, name, cargo, telefone, url });
        return response.status(201).send();
    }
}
exports.UpdateCollaboratorController = UpdateCollaboratorController;
