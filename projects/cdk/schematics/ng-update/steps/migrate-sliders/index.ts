import {Tree} from '@angular-devkit/schematics';
import {migrateInputSlider} from './migrate-input-slider';

export function migrateSliders(tree: Tree): void {
    migrateInputSlider(tree);
}
