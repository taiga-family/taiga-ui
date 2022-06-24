import {migrateInputSlider} from './migrate-input-slider';
import {migrateInputRange} from './migrate-input-range';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';

export function migrateSliders(fileSystem: DevkitFileSystem): void {
    migrateInputSlider(fileSystem);
    migrateInputRange(fileSystem);
}
