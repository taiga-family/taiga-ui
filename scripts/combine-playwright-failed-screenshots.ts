import {createCanvas, loadImage} from 'canvas';
import {readdirSync, writeFileSync} from 'fs';

const FAILED_SCREENSHOTS_PATH = `projects/demo-playwright/tests-results`;
const DIFF_IMAGE_POSTFIX = `-diff.png`;

(async function main(): Promise<void> {
    const testsDirs: string[] = readdirSync(FAILED_SCREENSHOTS_PATH).map(
        (dirName: string) => `${FAILED_SCREENSHOTS_PATH}/${dirName}`,
    );

    for (const dir of testsDirs) {
        const imagesPaths: string[] = readdirSync(dir).map(
            (fileName: string) => `${dir}/${fileName}`,
        );
        const diffImage = imagesPaths.find(path => path.endsWith(DIFF_IMAGE_POSTFIX));

        if (!diffImage) {
            continue;
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

        writeFileSync(`${dir}/${diffImageName}.diff.png`, buffer);
    }
})();
