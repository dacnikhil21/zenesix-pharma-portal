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
                'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity/brain/c94c13f6-63c3-485e-a337-7b1bb94a0643/media__1779539608525.png'
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

export default defineConfig({
    plugins: [copyHeroImageDev()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
});
