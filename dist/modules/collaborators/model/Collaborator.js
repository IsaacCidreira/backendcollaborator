"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaborator = void 0;
const uuid_1 = require("uuid");
class Collaborator {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.Collaborator = Collaborator;
