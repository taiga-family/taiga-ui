import {
    addMatchImageSnapshotPlugin,
    matchImageSnapshotPlugin,
} from 'cypress-image-snapshot/plugin';
import fs from 'fs';

declare module 'cypress-image-snapshot/plugin' {
    function matchImageSnapshotPlugin(
        details: Cypress.ScreenshotDetails,
    ):
        | void
        | Cypress.AfterScreenshotReturnObject
        | Promise<Cypress.AfterScreenshotReturnObject>;
}

export interface TuiSnapshotPluginOptions {
    newSnapshotMark: string;
    markNewSnapshotsEnabled: boolean;
}

export function tuiAddSnapshotPlugin(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
    {markNewSnapshotsEnabled, newSnapshotMark}: TuiSnapshotPluginOptions,
): void {
    addMatchImageSnapshotPlugin(on, config);
    on('after:screenshot', details => {
        const {name, path} = details;
        const possibleSnapshotPath = path
            .replace('screenshots', 'snapshots')
            .replace(name, `${name}.snap`);
        const snapshotAlreadyExists = fs.existsSync(possibleSnapshotPath);

        if (markNewSnapshotsEnabled && !snapshotAlreadyExists) {
            const newPath = path.replace(name, `${newSnapshotMark}${name}`);

            fs.renameSync(path, newPath);

            return matchImageSnapshotPlugin({...details, path: newPath});
        }

        return matchImageSnapshotPlugin(details);
    });
}
