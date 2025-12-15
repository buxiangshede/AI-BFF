"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiService {
    async getInfo() {
        return { item: 'sample data', result: [1, 2, 3], status: 200 };
    }
}
exports.default = ApiService;
