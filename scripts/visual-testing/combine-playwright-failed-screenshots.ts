import {readdirSync, writeFileSync} from 'node:fs';

import {combineSnapshots} from './combine-snapshots';

const FAILED_SCREENSHOTS_PATH = 'projects/demo-playwright/tests-results';
const DIFF_IMAGE_POSTFIX = '-diff.png';

(async function combinePlaywrightFailedScreenshots(
    rootPath = FAILED_SCREENSHOTS_PATH,
): Promise<void> {
    const filesOrDirs = readdirSync(rootPath, {
        withFileTypes: true,
    });

    for (const {name} of filesOrDirs.filter(
        (x) => x.isDirectory() && !/-retry\d$/.exec(x.name),
    )) {
        await combinePlaywrightFailedScreenshots(`${rootPath}/${name}`);
    }

    const imagesPaths: string[] = filesOrDirs
        .filter((x) => x.isFile() && x.name.endsWith('.png'))
        .map(({name}) => `${rootPath}/${name}`);
    const diffImage = imagesPaths.find((path) => path.endsWith(DIFF_IMAGE_POSTFIX));

    if (!diffImage) {
        return;
    }

    const buffer = await combineSnapshots(imagesPaths);
    const diffImageName = diffImage.split('/').pop()!.replace(DIFF_IMAGE_POSTFIX, '');

    writeFileSync(`${rootPath}/${diffImageName}.diff.png`, buffer);
})();
