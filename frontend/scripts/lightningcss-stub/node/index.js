// Minimal lightningcss stub to avoid native binary/wasm loading in serverless builds.
const toBuffer = (code) => {
  if (Buffer.isBuffer(code)) return code;
  if (typeof code === 'string') return Buffer.from(code);
  if (code && ArrayBuffer.isView(code)) return Buffer.from(code.buffer);
  return Buffer.from('');
};

const identity = (opts = {}) => ({
  code: toBuffer(opts.code || ''),
  map: null,
  warnings: [],
});

const transform = (options = {}) => identity(options);
const bundle = (options = {}) => identity(options);
const browserslistToTargets = () => ({});
const composeVisitors = (...v) => v.filter(Boolean);

module.exports = {
  transform,
  bundle,
  browserslistToTargets,
  composeVisitors,
  Features: {},
};
