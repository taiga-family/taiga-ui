import {readdirSync} from 'node:fs';

import {tuiCombineSnapshots} from './combine-snapshots';

const FAILED_SCREENSHOTS_PATH =
    process.env.FAILED_SCREENSHOTS_PATH ?? 'projects/demo-playwright/tests-results';

const DIFF_IMAGE_POSTFIX = process.env.DIFF_IMAGE_POSTFIX ?? '-diff.png';
const SNAPSHOT_IMAGE_POSTFIXES = ['-actual.png', DIFF_IMAGE_POSTFIX, '-expected.png'];
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

    const images = new Set(imagesPaths);
    const diffs = imagesPaths.filter((path) => path.endsWith(DIFF_IMAGE_POSTFIX));

    for (const diffImage of diffs) {
        const diffImageName = getSnapshotPath(diffImage).split('/').pop() ?? '';
        const output = `${rootPath}/${diffImageName}${OUTPUT_DIFF_IMAGE_POSTFIX}`;
        const inputs = getSnapshotInputs(images, diffImage);

        tuiCombineSnapshots(inputs, output).then(() =>
            console.info(` ✅ Async saved merged image: ${output}`),
        );
    }
}

/**
 * Returns screenshots that belong to the same Playwright snapshot.
 *
 * We intentionally build exact file names instead of matching by prefix.
 * Snapshot names can share the same prefix:
 *
 * @example
 * // For "5.desktop-diff.png" include only:
 * // - "5.desktop-actual.png"
 * // - "5.desktop-diff.png"
 * // - "5.desktop-expected.png"
 * //
 * // Do not include:
 * // - "5.desktop-rtl-actual.png"
 * // - "5.desktop-rtl-diff.png"
 * // - "5.desktop-rtl-expected.png"
 */
function getSnapshotInputs(images: ReadonlySet<string>, diffImage: string): string[] {
    const snapshotPath = getSnapshotPath(diffImage);

    return SNAPSHOT_IMAGE_POSTFIXES.map((postfix) => `${snapshotPath}${postfix}`).filter(
        (path) => images.has(path),
    );
}

function getSnapshotPath(diffImage: string): string {
    return diffImage.slice(0, -DIFF_IMAGE_POSTFIX.length);
}
