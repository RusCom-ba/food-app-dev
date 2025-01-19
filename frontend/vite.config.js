import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],  // Osiguraj da JSX ekstenzije budu prepoznate
  },
  build: {
    outDir: 'dist',  // Osiguraj da build ide u dist folder
  },
  esbuild: {
    loader: 'jsx',  // Ispravan loader za JSX fajlove
  }
});
