// @ts-nocheck It is used in CI only!
/**
 * Canvas has difficult installation guide for ARM CPU, including an Apple M1 or M2
 * (not friendly for our external contributors).
 * https://github.com/Automattic/node-canvas/issues/1511
 */
import {readdirSync, writeFileSync} from 'node:fs';

import {createCanvas, loadImage, version} from 'canvas';

const FAILED_SCREENSHOTS_PATH = 'projects/demo-playwright/tests-results';
const DIFF_IMAGE_POSTFIX = '-diff.png';

console.info('canvas:', version);

(async function combinePlaywrightFailedScreenshots(
    rootPath = FAILED_SCREENSHOTS_PATH,
): Promise<void> {
    const filesOrDirs = readdirSync(rootPath, {
        withFileTypes: true,
    });

    for (const {name} of filesOrDirs.filter(x => x.isDirectory())) {
        await combinePlaywrightFailedScreenshots(`${rootPath}/${name}`);
    }

    const imagesPaths: string[] = filesOrDirs
        .filter(x => x.isFile() && x.name.endsWith('.png'))
        .map(({name}) => `${rootPath}/${name}`);
    const diffImage = imagesPaths.find(path => path.endsWith(DIFF_IMAGE_POSTFIX));

    if (!diffImage) {
        return;
    }

    const images = await Promise.all(imagesPaths.map(loadImage));
    const totalWidth = images.reduce((acc: number, {width}) => acc + width, 0);
    const maxHeight = Math.max(...images.map(({height}) => height));
    const canvas = createCanvas(totalWidth, maxHeight);
    const ctx = canvas.getContext('2d');

    let prevWidth = 0;

    images
        .reverse() // After <= Diff => Before
        .forEach(image => {
            ctx.drawImage(image, prevWidth, 0);
            prevWidth += image.width;
        });

    const buffer = canvas.toBuffer('image/png');
    const diffImageName = diffImage.split('/').pop()!.replace(DIFF_IMAGE_POSTFIX, '');

    writeFileSync(`${rootPath}/${diffImageName}.diff.png`, buffer);
})();
