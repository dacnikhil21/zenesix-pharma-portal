import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Dev-only plugin: copies the user-uploaded hero image into images/ on local startup.
 * On Vercel/CI, the source path won't exist — it safely skips with a warning.
 * The committed images/home-hero.png is always used for production builds.
 */
function copyHeroImageDev() {
    return {
        name: 'copy-hero-image-dev',
        configureServer(server) {
            const src = path.resolve(
                'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity/brain/616f37b6-33e2-4ce5-a58b-c23accffe1fe/media__1779972475592.png'
            );
            const dest = path.resolve('./images/home-hero.png');
            try {
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, dest);
                    console.log('\x1b[32m%s\x1b[0m', '[zenesix] ✓ Hero image synced to images/home-hero.png');
                }
            } catch (e) {
                // Silently skip on Vercel / CI
            }
        }
    };
}

function copyCrandropImageDev() {
    return {
        name: 'copy-crandrop-image-dev',
        configureServer(server) {
            const src = path.resolve(
                'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity/brain/dd930479-3e06-4609-91dc-b5498714f159/crandrop_cropped_1780236526734.png'
            );
            const destPng = path.resolve('./images/crandrop.png');
            const destJpg = path.resolve('./images/crandrop.jpg');
            try {
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, destPng);
                    fs.copyFileSync(src, destJpg);
                    console.log('\x1b[32m%s\x1b[0m', '[zenesix] ✓ Crandrop cropped image synced to images/');
                }
            } catch (e) {
                // Silently skip
            }
        }
    };
}

export default defineConfig({
    plugins: [copyHeroImageDev(), copyCrandropImageDev()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
});
