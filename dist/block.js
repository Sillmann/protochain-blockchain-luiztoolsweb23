"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor() {
        this.index = 1;
        this.hash = "isaura";
    }
    isValid() {
        if (this.index < 0)
            return false;
        if (!this.hash)
            return false;
        return true;
    }
}
exports.default = Block;
