"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_koa_1 = require("awilix-koa");
// import Router from 'koa-router';
let IndexController = class IndexController {
    async actionIndex(ctx) {
        const data = await ctx.render('index', {
            data: 'AI BFF Service'
        });
        ctx.body = data;
    }
};
__decorate([
    (0, awilix_koa_1.GET)()
], IndexController.prototype, "actionIndex", null);
IndexController = __decorate([
    (0, awilix_koa_1.route)('/')
], IndexController);
exports.default = IndexController;
