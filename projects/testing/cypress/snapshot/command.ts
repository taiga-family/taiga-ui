import {Options} from 'cypress-image-snapshot';
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

export function tuiAddMatchImageSnapshotCommand(options: Options): void {
    addMatchImageSnapshotCommand(options);
}
