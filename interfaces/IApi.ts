/*
 * @Author: shasha0102 970284297@qq.com
 * @Date: 2025-12-13 15:41:43
 * @LastEditors: shasha0102 970284297@qq.com
 * @LastEditTime: 2025-12-13 15:42:34
 * @FilePath: /koa/AI-BFF/interface/IApi.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type IData = {
  item: string;
  result?: Array<number | string>;
  status?: number;
}
export interface IApi {
  getInfo():  Promise<IData>;
}