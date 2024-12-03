import {readdirSync, writeFileSync} from 'node:fs';

import {combineSnapshots} from './combine-snapshots';

const FAILED_SCREENSHOTS_PATH = 'projects/demo-playwright/tests-results';
const DIFF_IMAGE_POSTFIX = '-diff.png';
const OUTPUT_DIFF_IMAGE_POSTFIX = '.diff.png';
const RETRY_COUNT = Number(process.env.RETRY_COUNT ?? 2);
const REG_EXP = new RegExp(`retry${RETRY_COUNT}$|retry${RETRY_COUNT}/`);

(async function combinePlaywrightFailedScreenshots(
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
        await combinePlaywrightFailedScreenshots(`${rootPath}/${name}`);
    }

    const imagesPaths: string[] = filesOrDirs
        .filter(
            (x) =>
                x.isFile() &&
                x.name.endsWith('.png') &&
                !x.name.endsWith(OUTPUT_DIFF_IMAGE_POSTFIX),
        )
        .map(({name}) => `${rootPath}/${name}`);

    const diffImage = imagesPaths.find((path) => path.endsWith(DIFF_IMAGE_POSTFIX));

    if (!diffImage) {
        return;
    }

    const buffer = await combineSnapshots(imagesPaths);
    const diffImageName = diffImage.split('/').pop()!.replace(DIFF_IMAGE_POSTFIX, '');
    const path = `${rootPath}/${diffImageName}${OUTPUT_DIFF_IMAGE_POSTFIX}`;

    writeFileSync(path, buffer);

    console.info(`Write new diff: ${path}`);
})();
