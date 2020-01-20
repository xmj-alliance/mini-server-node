import { resolve } from 'path';

import * as Koa from "koa";
import * as logger from "koa-logger";
import * as cors from "@koa/cors";
import * as serve from 'koa-static';

class App {
  app = new Koa();
  port = 3000;

  constructor() {
    this.app.use(logger());
    this.app.use(cors());
    this.app.use(serve(resolve(__dirname, ".")));
    
    this.app.listen(this.port, () => {
      console.log(`🎧 Mini Server is listening on port ${this.port}`);
    });
  }
}

export default new App();