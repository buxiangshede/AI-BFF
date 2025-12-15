import { addAliases } from 'module-alias';


addAliases({
  "@root": __dirname,
  "@interfaces": `${__dirname}/interfaces`,
  "@config": `${__dirname}/config`,
  "@middlewares": `${__dirname}/middlewares`
})


import config from '@config/index';
import render from '@koa/ejs';
import {createContainer, Lifetime} from 'awilix';
import {loadControllers, scopePerRequest} from 'awilix-koa';
import Koa from 'koa';
import {configure, getLogger} from 'log4js'
import  ErrorHandler from '@middlewares/ErrorHandler';
import serve from "koa-static";


const app = new Koa();
// 日志
configure({
  appenders: { cheese: { type: "file", filename: `${__dirname}/logs/error.log` } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
const {port, viewDir, memoryFlag, staticDir} = config;

app.use(serve(staticDir));
// 创建容器
const container = createContainer()
// 
container.loadModules([`${__dirname}/services/*{.ts,.js}`], {
  formatName:  'camelCase',
  resolverOptions: {
    lifetime:  Lifetime.SCOPED
  }
})
// 把容器和路由进行关联
app.use(scopePerRequest(container));
// ejs模板配置
render(app, {
  root:  viewDir,
  layout:  false,
  viewExt:  'html',
  cache:  memoryFlag,
  debug:  false
})

const logger = getLogger("cheese");
ErrorHandler.error(app, logger);

// 把所有的路有load进来
app.use(loadControllers(`${__dirname}/routes/*{.ts,.js}`))
// Start server
if (process.env.NODE_ENV !== 'development') {

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
export default app;
