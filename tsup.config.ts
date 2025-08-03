import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true, // generates .d.ts files
    sourcemap: true,
    clean: true, // remove old dist
    target: 'esnext',
    external: ['react', 'react-dom'], // exclude from bundle
});
