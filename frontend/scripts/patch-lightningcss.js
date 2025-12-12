// Shims lightningcss to use the WASM build (lightningcss-wasm) on platforms without native binaries (e.g., Vercel Linux).
// This runs postinstall and overwrites the lightningcss Node entry point.

const fs = require('fs');
const path = require('path');

try {
  // Resolve package.json then hop to node/index.js (bypass package exports)
  const pkgPath = require.resolve('lightningcss/package.json');
  const target = path.join(path.dirname(pkgPath), 'node', 'index.js');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const shim = `// Auto-generated shim to force lightningcss to use WASM
const wasm = require('lightningcss-wasm');
module.exports = wasm;`;

  fs.writeFileSync(target, shim, 'utf8');
  console.log('[patch-lightningcss] Applied WASM shim at', target);
} catch (err) {
  console.warn('[patch-lightningcss] Skipped (lightningcss not found):', err?.message || err);
}
