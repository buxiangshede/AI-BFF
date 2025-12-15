"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const lodash_1 = __importDefault(require("lodash"));
let config = {
    viewDir: (0, node_path_1.join)(__dirname, '..', 'views'),
    staticDir: (0, node_path_1.join)(__dirname, '..', 'assets'),
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8081,
    memoryFlag: false,
};
if (process.env.NODE_ENV === 'development') {
    const localConfig = {
        port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8081,
    };
    config = lodash_1.default.assignIn(config, localConfig);
}
if (process.env.NODE_ENV === 'production') {
    const prodConfig = {
        port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8082,
        memoryFlag: 'memory',
    };
    config = lodash_1.default.assignIn(config, prodConfig);
}
exports.default = config;
