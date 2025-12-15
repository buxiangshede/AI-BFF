/*
 * @Author: shasha0102 970284297@qq.com
 * @Date: 2025-12-13 15:33:31
 * @LastEditors: shasha0102 970284297@qq.com
 * @LastEditTime: 2025-12-13 22:10:22
 * @FilePath: /koa/AI-BFF/services/ApiService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEi
 */
import type { IApi, IData } from '../interfaces/IApi';

class ApiService implements IApi {
  async getInfo(): Promise<IData>  {
    return { item: 'sample data', result: [1, 2, 3], status: 200 };
  }
}

export default ApiService;