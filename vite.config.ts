import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

const aliases = ['components', 'pages', 'layouts'].reduce(
  (acc, alias) => {
    acc[`@${alias}`] = path.resolve(__dirname, `./src/${alias}`);
    return acc;
  },
  {} as Record<string, string>,
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: aliases,
  },
});
