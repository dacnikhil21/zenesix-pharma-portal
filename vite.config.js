import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Custom plugin: copies the user-uploaded hero image into images/ on startup.
 * This runs once when Vite starts, before any requests are served.
 */
function copyHeroImage() {
    return {
        name: 'copy-hero-image',
        buildStart() {
            const src = path.resolve(
                'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity/brain/c94c13f6-63c3-485e-a337-7b1bb94a0643/media__1779539608525.png'
            );
            const dest = path.resolve('./images/home-hero.png');
            try {
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, dest);
                    console.log('\x1b[32m%s\x1b[0m', '[zenesix] ✓ Hero image copied to images/home-hero.png');
                } else {
                    console.warn('\x1b[33m%s\x1b[0m', '[zenesix] ⚠ Source hero image not found. Hero will use fallback.');
                }
            } catch (e) {
                console.error('[zenesix] ✗ Failed to copy hero image:', e.message);
            }
        },
        configureServer(server) {
            // Also copy on server start (dev mode uses configureServer, not buildStart)
            const src = path.resolve(
                'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity/brain/c94c13f6-63c3-485e-a337-7b1bb94a0643/media__1779539608525.png'
            );
            const dest = path.resolve('./images/home-hero.png');
            try {
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, dest);
                    console.log('\x1b[32m%s\x1b[0m', '[zenesix] ✓ Hero image copied to images/home-hero.png');
                } else {
                    console.warn('\x1b[33m%s\x1b[0m', '[zenesix] ⚠ Source hero image not found.');
                }
            } catch (e) {
                console.error('[zenesix] ✗ Failed to copy hero image:', e.message);
            }
        }
    };
}

export default defineConfig({
    plugins: [copyHeroImage()],
    server: {
        fs: {
            allow: ['.', 'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity']
        }
    }
});
