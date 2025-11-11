import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type TuiStatus} from '@taiga-ui/legacy/utils';

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
export interface TuiTagOptions {
    readonly autoColor: boolean;
    readonly size: TuiSizeL | TuiSizeS;
    readonly status: TuiStatus;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
export const TUI_TAG_DEFAULT_OPTIONS: TuiTagOptions = {
    size: 'm',
    status: 'default',
    autoColor: false,
};

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
export const [TUI_TAG_OPTIONS, tuiTagOptionsProvider] = tuiCreateOptions(
    TUI_TAG_DEFAULT_OPTIONS,
);
