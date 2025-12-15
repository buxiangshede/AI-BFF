"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_alias_1 = require("module-alias");
(0, module_alias_1.addAliases)({
    "@root": __dirname,
    "@interfaces": `${__dirname}/interfaces`,
    "@config": `${__dirname}/config`,
    "@middlewares": `${__dirname}/middlewares`
});
const index_1 = __importDefault(require("@config/index"));
const ejs_1 = __importDefault(require("@koa/ejs"));
const awilix_1 = require("awilix");
const awilix_koa_1 = require("awilix-koa");
const koa_1 = __importDefault(require("koa"));
const log4js_1 = require("log4js");
const ErrorHandler_1 = __importDefault(require("@middlewares/ErrorHandler"));
const koa_static_1 = __importDefault(require("koa-static"));
const app = new koa_1.default();
// 日志
(0, log4js_1.configure)({
    appenders: { cheese: { type: "file", filename: `${__dirname}/logs/error.log` } },
    categories: { default: { appenders: ["cheese"], level: "error" } },
});
const { port, viewDir, memoryFlag, staticDir } = index_1.default;
app.use((0, koa_static_1.default)(staticDir));
// 创建容器
const container = (0, awilix_1.createContainer)();
// 
container.loadModules([`${__dirname}/services/*{.ts,.js}`], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: awilix_1.Lifetime.SCOPED
    }
});
// 把容器和路由进行关联
app.use((0, awilix_koa_1.scopePerRequest)(container));
// ejs模板配置
(0, ejs_1.default)(app, {
    root: viewDir,
    layout: false,
    viewExt: 'html',
    cache: memoryFlag,
    debug: false
});
const logger = (0, log4js_1.getLogger)("cheese");
ErrorHandler_1.default.error(app, logger);
// 把所有的路有load进来
app.use((0, awilix_koa_1.loadControllers)(`${__dirname}/routes/*{.ts,.js}`));
// Start server
if (process.env.NODE_ENV !== 'development') {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
exports.default = app;
