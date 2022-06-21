import {Tree} from '@angular-devkit/schematics';
import {migrateInputSlider} from './migrate-input-slider';
import {migrateInputRange} from './migrate-input-range';

export function migrateSliders(tree: Tree): void {
    migrateInputSlider(tree);
    migrateInputRange(tree);
}
