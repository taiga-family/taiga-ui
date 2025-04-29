import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiInputChipOptions {
    readonly separator: RegExp | string;
    readonly unique: boolean;
}

export const TUI_INPUT_CHIP_DEFAULT_OPTIONS: TuiInputChipOptions = {
    separator: ',',
    unique: true,
};

export const [TUI_INPUT_CHIP_OPTIONS, tuiInputChipOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_CHIP_DEFAULT_OPTIONS,
);
