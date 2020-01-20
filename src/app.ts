import { resolve } from 'path';

import * as Koa from "koa";
import * as logger from "koa-logger";
import * as cors from "@koa/cors";
import * as serve from 'koa-static';
import { parse } from "yargs";

class App {
  app = new Koa();
  port = 3000;
  argv = parse();
  clientPath = "";

  constructor() {

    if ( !isNaN(this.argv.port as number) ) {
      this.port = this.argv.port as number;
    }

    let pathToServe = this.argv._[0];
    if (!pathToServe) {
      pathToServe = ".";
    }
    // make path absolute
    this.clientPath = resolve(pathToServe);
    
    this.app.use(logger());
    this.app.use(cors());
    this.app.use(serve(this.clientPath));

    this.app.listen(this.port, () => {
      console.log(`🎧 Mini Server is listening on port: ${this.port}`);
      console.log(`📺 Mini Server is currently serving: ${this.clientPath}`);
    });

  }
}

export default new App();