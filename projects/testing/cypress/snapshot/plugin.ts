/// <reference types="cypress" />

import fs from 'fs';

declare module 'cypress-image-snapshot/plugin' {
    function matchImageSnapshotPlugin(
        details: Cypress.ScreenshotDetails,
    ): void | Cypress.AfterScreenshotReturnObject;
}

export interface TuiSnapshotPluginOptions {
    newSnapshotMarkFn: (oldSnapshotFileName: string) => string;
    newSnapshotMarkEnabled: boolean;
}

export async function tuiAddSnapshotPlugin(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
    {newSnapshotMarkEnabled, newSnapshotMarkFn}: TuiSnapshotPluginOptions,
): Promise<void> {
    const {addMatchImageSnapshotPlugin, matchImageSnapshotPlugin} = await import(
        'cypress-image-snapshot/plugin'
    );

    addMatchImageSnapshotPlugin(on, config);

    on('after:screenshot', (details: Cypress.ScreenshotDetails) => {
        const {name, path, testFailure} = details;
        const possibleSnapshotPath = path
            .replace('screenshots', 'snapshots')
            .replace(/\.(\w+)$/g, '.snap.$1');
        const snapshotAlreadyExists = fs.existsSync(possibleSnapshotPath);

        if (newSnapshotMarkEnabled && !testFailure && !snapshotAlreadyExists) {
            const newName = newSnapshotMarkFn(name);
            const newPath = path.replace(name, newName);

            fs.renameSync(path, newPath);

            console.info(
                '\x1B[32m%s\x1B[0m',
                '\t[tuiAddSnapshotPlugin]:',
                `${name} => ${newName}`,
            );

            return matchImageSnapshotPlugin({...details, path: newPath});
        }

        return matchImageSnapshotPlugin(details);
    });
}
