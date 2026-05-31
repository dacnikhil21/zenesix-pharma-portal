const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ABHINAYA BEDGUM\\.gemini\\antigravity\\brain\\5ccc427c-e932-4369-8801-9b191bd0c984';
const destDirs = [
    'c:\\Users\\ABHINAYA BEDGUM\\Desktop\\zenuss\\images',
    'c:\\Users\\ABHINAYA BEDGUM\\Desktop\\zenuss\\public\\images'
];

const imageMapping = [
    { src: 'media__1780062659752.jpg', name: 'crandrop' },
    { src: 'media__1780062664956.jpg', name: 'flexivora' },
    { src: 'media__1780062676455.jpg', name: 'axogain' },
    { src: 'media__1780062694898.jpg', name: 'histoheal' },
    { src: 'media__1780062702864.jpg', name: 'velytra-gel' }
];

destDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

imageMapping.forEach(mapping => {
    const srcPath = path.join(srcDir, mapping.src);
    if (!fs.existsSync(srcPath)) {
        console.error(`Source file not found: ${srcPath}`);
        return;
    }

    destDirs.forEach(destDir => {
        // Copy as .png
        const destPng = path.join(destDir, `${mapping.name}.png`);
        fs.copyFileSync(srcPath, destPng);
        console.log(`Copied ${mapping.src} -> ${destPng}`);

        // Copy as .jpg
        const destJpg = path.join(destDir, `${mapping.name}.jpg`);
        fs.copyFileSync(srcPath, destJpg);
        console.log(`Copied ${mapping.src} -> ${destJpg}`);
    });
});

console.log('All product images successfully updated!');
