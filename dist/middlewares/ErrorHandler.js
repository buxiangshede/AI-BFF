"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler {
    static error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
            }
            catch (e) {
                logger.error(e);
                const err = e instanceof Error ? e : new Error(String(e));
                const errorMessage = err.stack;
                ctx.status = 500;
                await ctx.render('500', { errorMessage });
            }
        });
        app.use(async (ctx, next) => {
            await next();
            if (ctx.status !== 404) {
                return;
            }
            ctx.status = 404;
            await ctx.render('404');
        });
    }
}
exports.default = ErrorHandler;
