import {createCanvas, loadImage} from 'canvas';
import {Dirent, readdirSync, writeFileSync} from 'fs';

(async function main(): Promise<void> {
    const failedScreenshotTestsPath = `projects/demo-playwright/tests-results`;
    const testsDirs: string[] = readdirSync(failedScreenshotTestsPath, {
        withFileTypes: true,
    }).map(({name}: Dirent) => `${failedScreenshotTestsPath}/${name}`);

    for (const dir of testsDirs) {
        const imagesPaths: string[] = readdirSync(dir).map(
            (fileName: string) => `${dir}/${fileName}`,
        );

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

        writeFileSync(`${dir}/summary.diff.png`, buffer);
    }
})();
