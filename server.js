/**
 * @file 开发服务器
 * @author dongkunshan(windwithfo@yeah.net)
 */

import Koa       from 'koa';
import path      from 'path';
import webpack   from 'webpack';
import Router    from 'koa-router';
import serve     from 'koa-static';
// import convert   from 'koa-convert';
import middle    from 'koa-webpack';
import config    from './configs/config';
import webConfig from './configs/webpack.dev.config';

const app = new Koa();
const router = new Router();
const compiler = webpack(webConfig);

const middleware = middle({
  compiler: compiler,
  dev: {
    stats: {
      colors: true,
      chunks: false
    }
  }
});

compiler.apply(new webpack.ProgressPlugin(function (percentage) {
  if (percentage === 1) {
    console.log('reload page');
    middleware.hot.publish({
      action: 'reload'
    });
  }
}));

app.use(middleware);
app.use(serve(path.join(__dirname, './mock')));
app.use(serve(path.join(__dirname, '../assets')));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.get('/page*', (ctx) => {
  ctx.body = middleware.dev.fileSystem
  .readFileSync(middleware.dev.getFilenameFromUrl('/index.html'))
  .toString();
});

app.use(router.routes(), router.allowedMethods());

app.listen(config.port);
console.log('server listen on port ' + config.port);
