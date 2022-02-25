"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollaboratorController = void 0;
class CreateCollaboratorController {
    constructor(createCollaboratorUseCase) {
        this.createCollaboratorUseCase = createCollaboratorUseCase;
    }
    handle(request, response) {
        let { name, cargo, telefone, url } = request.body;
        if (url === '') {
            url = 'https://freesvg.org/img/abstract-user-flat-4.png';
        }
        if (!name) {
            return response.status(404).json({ error: 'Name is required' });
        }
        this.createCollaboratorUseCase.execute({ name, cargo, telefone, url });
        return response.status(201).send();
    }
}
exports.CreateCollaboratorController = CreateCollaboratorController;
