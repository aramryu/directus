"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = void 0;
const base_1 = require("./base");
class ForbiddenException extends base_1.BaseException {
    constructor(message = `You don't have permission to access this.`, extensions) {
        super(message, 403, 'FORBIDDEN', extensions);
    }
}
exports.ForbiddenException = ForbiddenException;
