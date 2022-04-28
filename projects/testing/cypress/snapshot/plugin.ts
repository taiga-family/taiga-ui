/// <reference types="cypress" />

import fs from 'fs';

declare module 'cypress-image-snapshot/plugin' {
    function matchImageSnapshotPlugin(
        details: Cypress.ScreenshotDetails,
    ): void | Cypress.AfterScreenshotReturnObject;
}

export interface TuiSnapshotPluginOptions {
    newSnapshotMark: string;
    newSnapshotMarkEnabled: boolean;
}

export async function tuiAddSnapshotPlugin(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
    {newSnapshotMarkEnabled, newSnapshotMark}: TuiSnapshotPluginOptions,
): Promise<void> {
    const {addMatchImageSnapshotPlugin, matchImageSnapshotPlugin} = await import(
        'cypress-image-snapshot/plugin'
    );

    addMatchImageSnapshotPlugin(on, config);

    on('after:screenshot', (details: Cypress.ScreenshotDetails) => {
        const {name, path} = details;
        const possibleSnapshotPath = path
            .replace('screenshots', 'snapshots')
            .replace(name, `${name}.snap`);
        const snapshotAlreadyExists = fs.existsSync(possibleSnapshotPath);

        if (newSnapshotMarkEnabled && !snapshotAlreadyExists) {
            const newPath = path.replace(name, `${newSnapshotMark}${name}`);

            fs.renameSync(path, newPath);

            return matchImageSnapshotPlugin({...details, path: newPath});
        }

        return matchImageSnapshotPlugin(details);
    });
}
