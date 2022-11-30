import {DevkitFileSystem} from 'ng-morph';

import {TuiSchema} from '../../../ng-add/schema';
import {
    infoLog,
    PROCESSING_SYMBOL,
    processLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';
import {migrateInputRange} from './migrate-input-range';
import {migrateInputSlider} from './migrate-input-slider';

export function migrateSliders(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options[`skip-logs`] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating sliders...`);

    !options[`skip-logs`] &&
        processLog(
            `${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}InputSlider...`,
        );

    migrateInputSlider(fileSystem, options);

    !options[`skip-logs`] &&
        processLog(
            `${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}InputRange...`,
        );

    migrateInputRange(fileSystem, options);

    !options[`skip-logs`] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} sliders migrated \n`);
}
