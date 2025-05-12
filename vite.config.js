import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(async () => ({
    plugins: [      
      tailwindcss()
    ],
}))