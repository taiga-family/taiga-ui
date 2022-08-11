import {migrateInputSlider} from './migrate-input-slider';
import {migrateInputRange} from './migrate-input-range';
import {DevkitFileSystem} from 'ng-morph';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';

export function migrateSliders(fileSystem: DevkitFileSystem): void {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating sliders...`);

    migrateInputSlider(fileSystem);
    migrateInputRange(fileSystem);

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} sliders migrated \n`);
}
