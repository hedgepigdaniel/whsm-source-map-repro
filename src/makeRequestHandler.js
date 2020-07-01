export default () => (ctx, next) => {
  debugger; // This always works
  console.log('breakpoint?'); // Adding a breakpoint here only works before the first recompile :(
  ctx.body = 'Hello world!';
};
