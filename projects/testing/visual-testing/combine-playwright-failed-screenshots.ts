import {readdirSync} from 'node:fs';

import {tuiCombineSnapshots} from './combine-snapshots';

const FAILED_SCREENSHOTS_PATH =
    process.env.FAILED_SCREENSHOTS_PATH ?? 'projects/demo-playwright/tests-results';
const DIFF_IMAGE_POSTFIX = process.env.DIFF_IMAGE_POSTFIX ?? '-diff.png';
const OUTPUT_DIFF_IMAGE_POSTFIX = process.env.OUTPUT_DIFF_IMAGE_POSTFIX ?? '.diff.png';
const RETRY_COUNT = Number(process.env.RETRY_COUNT ?? 2);
const REG_EXP = new RegExp(`retry${RETRY_COUNT}$|retry${RETRY_COUNT}/`);

// noinspection JSUnusedGlobalSymbols
export async function tuiCombinePlaywrightFailedScreenshots(
    rootPath = FAILED_SCREENSHOTS_PATH,
): Promise<void> {
    const filesOrDirs = readdirSync(rootPath, {
        withFileTypes: true,
    }).filter((x) =>
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
        const inputs = imagesPaths.filter((path) =>
            path.startsWith(diffImage.replace(DIFF_IMAGE_POSTFIX, '')),
        );

        tuiCombineSnapshots(inputs, output).then(() =>
            console.info(` ✅ Async saved merged image: ${output}`),
        );
    }
}
