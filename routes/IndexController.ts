
import {GET, route} from 'awilix-koa';
import type { Context } from 'koa';
// import Router from 'koa-router';

@route('/')
class IndexController {
  @GET()
  async actionIndex(ctx: Context): Promise<void> {
    const data = await ctx.render('index', {
      data: 'AI BFF Service'
    })
    ctx.body = data;
  }
}

export default IndexController;

