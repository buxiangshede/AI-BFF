import type {Logger} from 'log4js';
import type Koa from 'koa';
import type {Context} from 'koa';

export default class ErrorHandler {

  static error(app: Koa, logger: Logger) {
     app.use(async (ctx: Context, next: ()=>Promise<unknown>) => {
      try {
        await next();
       
      } catch (e) {
        logger.error(e);
        const err = e instanceof Error ? e : new Error(String(e));
        const errorMessage = err.stack;
        ctx.status =  500;
        await ctx.render('500', { errorMessage });
      }
    });
    app.use(async (ctx: Context, next: ()=>Promise<unknown>) => {
        await next();
        if (ctx.status !== 404) {
          return
        }
        ctx.status = 404;
        await ctx.render('404')
      
    });
    
  }

}