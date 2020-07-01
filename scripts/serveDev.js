import 'source-map-support/register';
import webpack from 'webpack';
import MemoryFs from 'memory-fs';
import Koa from 'koa';
import { webpackConfig } from './webpackConfig';
import webpackHotServerMiddleware, { createKoaHandler } from 'webpack-hot-server-middleware';

const app = new Koa();

debugger; // This always works

console.log('breakpoint'); // Adding a breakpoint on this line results in the debugger opening the compiled code, and in the wrong place

const compiler = webpack([webpackConfig]);
compiler.compilers[0].outputFileSystem = new MemoryFs();
compiler.watch({}, (err, stats) => {
  console.log('Built');
  console.log(err);
});

app.use(webpackHotServerMiddleware(compiler, {
  createHandler: createKoaHandler,
  chunkName: 'main',
}));

app.listen(3000);
console.log('Listening on port 3000');