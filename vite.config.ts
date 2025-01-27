import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  base: "cisea/",
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'facelift-components',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReacrDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 3000,
  },
})
