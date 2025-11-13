import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiStatus} from '@taiga-ui/legacy/utils';

/**
 * TODO(v5): delete it
 * @deprecated use {@link https://taiga-ui.dev/components/input-chip TuiInputChip} instead
 */
export interface TuiInputTagOptions {
    readonly autoColor: boolean;
    readonly separator: RegExp | string;
    readonly tagStatus: TuiStatus;
    readonly uniqueTags: boolean;
}

/**
 * TODO(v5): delete it
 * @deprecated use {@link https://taiga-ui.dev/components/input-chip TuiInputChip} instead
 */
export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    autoColor: false,
    separator: ',',
    tagStatus: 'default',
    uniqueTags: true,
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for InputTag component
 */
export const [TUI_INPUT_TAG_OPTIONS, tuiInputTagOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_TAG_DEFAULT_OPTIONS,
);
