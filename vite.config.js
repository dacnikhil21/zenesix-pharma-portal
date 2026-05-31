import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Immediate sync of new high-fidelity assets on Vite config evaluation
const srcCrandrop = 'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity/brain/dd930479-3e06-4609-91dc-b5498714f159/media__1780257145097.jpg';
const srcVision = 'C:/Users/ABHINAYA BEDGUM/.gemini/antigravity/brain/dd930479-3e06-4609-91dc-b5498714f159/media__1780257151674.jpg';

try {
    if (fs.existsSync(srcCrandrop)) {
        fs.copyFileSync(srcCrandrop, path.resolve('./images/crandrop.png'));
        fs.copyFileSync(srcCrandrop, path.resolve('./images/crandrop.jpg'));
        console.log('\x1b[32m%s\x1b[0m', '[zenesix] ✓ Crandrop brochure synced successfully');
    }
    if (fs.existsSync(srcVision)) {
        fs.copyFileSync(srcVision, path.resolve('./images/zenesix-vision.jpg'));
        console.log('\x1b[32m%s\x1b[0m', '[zenesix] ✓ Vision banner synced successfully');
    }
} catch (e) {
    console.error('[zenesix] Asset sync failed:', e);
}

export default defineConfig({
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
});

