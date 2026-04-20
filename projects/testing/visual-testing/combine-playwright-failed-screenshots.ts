import {mkdirSync, readdirSync} from 'node:fs';
import {dirname} from 'node:path';

import sharp from 'sharp';

import {tuiCombineSnapshots} from './combine-snapshots';

const FAILED_SCREENSHOTS_PATH =
    process.env.FAILED_SCREENSHOTS_PATH ?? 'projects/demo-playwright/tests-results';
const DIFF_IMAGE_POSTFIX = process.env.DIFF_IMAGE_POSTFIX ?? '-diff.png';
const ACTUAL_IMAGE_POSTFIX = process.env.ACTUAL_IMAGE_POSTFIX ?? '-actual.png';
const EXPECTED_IMAGE_POSTFIX = process.env.EXPECTED_IMAGE_POSTFIX ?? '-expected.png';
const COMBINE_ORDER = [EXPECTED_IMAGE_POSTFIX, DIFF_IMAGE_POSTFIX, ACTUAL_IMAGE_POSTFIX];
const OUTPUT_DIFF_IMAGE_POSTFIX = process.env.OUTPUT_DIFF_IMAGE_POSTFIX ?? '.diff.png';
const RETRY_COUNT = Number(process.env.RETRY_COUNT ?? 2);
const REG_EXP = new RegExp(`retry${RETRY_COUNT}$|retry${RETRY_COUNT}/`);

// noinspection JSUnusedGlobalSymbols
export async function tuiCombinePlaywrightFailedScreenshots(
    rootPath = FAILED_SCREENSHOTS_PATH,
): Promise<void> {
    const filesOrDirs = readdirSync(rootPath, {withFileTypes: true}).filter((x) =>
        x.isDirectory()
            ? REG_EXP.exec(x.name) || REG_EXP.exec(x.parentPath)
            : REG_EXP.exec(x.parentPath),
    );

    for (const {name} of filesOrDirs.filter((x) => x.isDirectory())) {
        await tuiCombinePlaywrightFailedScreenshots(`${rootPath}/${name}`);
    }

    const imagesPaths: string[] = filesOrDirs
        .filter(
            (x) =>
                x.isFile() &&
                x.name.endsWith('.png') &&
                !x.name.endsWith(OUTPUT_DIFF_IMAGE_POSTFIX),
        )
        .map(({name}) => `${rootPath}/${name}`);
    const diffs = imagesPaths.filter((path) => path.endsWith(DIFF_IMAGE_POSTFIX));

    for (const diffImage of diffs) {
        const diffImageName = diffImage.split('/').pop()!.replace(DIFF_IMAGE_POSTFIX, '');
        const output = `${rootPath}/${diffImageName}${OUTPUT_DIFF_IMAGE_POSTFIX}`;
        const inputs = imagesPaths
            .filter((path) => path.startsWith(diffImage.replace(DIFF_IMAGE_POSTFIX, '')))
            .sort(
                (a, b) =>
                    COMBINE_ORDER.findIndex((s) => a.endsWith(s)) -
                    COMBINE_ORDER.findIndex((s) => b.endsWith(s)),
            );

        tuiCombineSnapshots(inputs, output).then(() =>
            console.info(` ✅ Async saved merged image: ${output}`),
        );
    }

    const newActual = imagesPaths.filter(
        (path) =>
            path.endsWith(ACTUAL_IMAGE_POSTFIX) &&
            !diffs.some((diff) =>
                diff.startsWith(path.replace(ACTUAL_IMAGE_POSTFIX, '')),
            ),
    );

    for (const actualImage of newActual) {
        const name = actualImage.split('/').pop()!.replace(ACTUAL_IMAGE_POSTFIX, '');
        const output = `${rootPath}/${name}${OUTPUT_DIFF_IMAGE_POSTFIX}`;

        createWhiteAndActualDiff(actualImage, output).then(() =>
            console.info(` ✅ Async saved new page diff: ${output}`),
        );
    }
}

async function createWhiteAndActualDiff(
    actualPath: string,
    outputFile: string,
): Promise<void> {
    const {width, height} = await sharp(actualPath).metadata();

    const whiteBuffer = await sharp({
        create: {
            width,
            height,
            channels: 4,
            background: {r: 255, g: 255, b: 255, alpha: 1},
        },
    })
        .png()
        .toBuffer();

    mkdirSync(dirname(outputFile), {recursive: true});

    await sharp({
        create: {
            width: width * 2,
            height,
            channels: 4,
            background: {r: 255, g: 255, b: 255, alpha: 1},
        },
    })
        .composite([
            {input: whiteBuffer, top: 0, left: 0},
            {input: actualPath, top: 0, left: width},
        ])
        .toFile(outputFile);
}
