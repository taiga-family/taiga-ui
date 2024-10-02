// @ts-nocheck It is used in CI only!
/**
 * Canvas has difficult installation guide for ARM CPU, including an Apple M1 or M2
 * (not friendly for our external contributors).
 * https://github.com/Automattic/node-canvas/issues/1511
 */
import {createCanvas, loadImage} from 'canvas';

export async function combineSnapshots(
    imagesPaths: string[],
): Promise<NodeJS.ArrayBufferView> {
    const images = await Promise.all(imagesPaths.map(loadImage));
    const totalWidth = images.reduce((acc: number, {width}) => acc + width, 0);
    const maxHeight = Math.max(...images.map(({height}) => height));
    const canvas = createCanvas(totalWidth, maxHeight);
    const ctx = canvas.getContext('2d');

    let prevWidth = 0;

    images.forEach((image) => {
        ctx.drawImage(image, prevWidth, 0);
        prevWidth += image.width;
    });

    return canvas.toBuffer('image/png');
}
