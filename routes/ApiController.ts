/*
 * @Author: shasha0102 970284297@qq.com
 * @Date: 2025-12-13 15:33:47
 * @LastEditors: shasha0102 970284297@qq.com
 * @LastEditTime: 2025-12-13 22:29:56
 * @FilePath: /koa/AI-BFF/routes/ApiController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { IApi } from '@interfaces/IApi';
import {GET, route} from 'awilix-koa';
import type {Context} from 'koa';
// import Router from 'koa-router';

@route('/api')
class ApiController {
  public apiService: IApi;
  constructor({ apiService }: { apiService: IApi }) {
    this.apiService = apiService;
  }
  @route('/list')
  @GET()
  async actionList(ctx: Context) {
    const data = await this.apiService.getInfo();
    ctx.body = {
      data: data.item + Math.random(),
    };
  }
}

export default ApiController;

