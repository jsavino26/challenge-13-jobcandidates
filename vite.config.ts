import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,  
    host: true, 
    strictPort: true,  // Prevent Vite from switching ports automatically
    allowedHosts: ["challenge-13-jobcandidates.onrender.com"],  // Explicitly allow your Render domain
  },
});