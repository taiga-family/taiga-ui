import {createCanvas, loadImage} from 'canvas';
import {readdirSync, writeFileSync} from 'fs';

const FAILED_SCREENSHOTS_PATH = `projects/demo-playwright/tests-results`;
const DIFF_IMAGE_POSTFIX = `-diff.png`;

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
        .filter(x => x.isFile())
        .map(({name}) => `${rootPath}/${name}`);
    const diffImage = imagesPaths.find(path => path.endsWith(DIFF_IMAGE_POSTFIX));

    if (!diffImage) {
        return;
    }

    const images = await Promise.all(imagesPaths.map(loadImage));
    const totalWidth = images.reduce((acc, {width}) => acc + width, 0);
    const maxHeight = Math.max(...images.map(({height}) => height));
    const canvas = createCanvas(totalWidth, maxHeight);
    const ctx = canvas.getContext(`2d`);

    let prevWidth = 0;

    images.forEach(image => {
        ctx.drawImage(image, prevWidth, 0);
        prevWidth += image.width;
    });

    const buffer = canvas.toBuffer(`image/png`);
    const diffImageName = diffImage.split(`/`).pop()!.replace(DIFF_IMAGE_POSTFIX, ``);

    writeFileSync(`${rootPath}/${diffImageName}.diff.png`, buffer);
})();
