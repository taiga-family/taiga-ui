import {type MaskitoNumberParams} from '@maskito/kit';
import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {CHAR_MINUS} from '@taiga-ui/cdk/constants';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiInputNumberOptions extends Pick<
    Required<MaskitoNumberParams>,
    'minusSign' | 'postfix' | 'prefix' // TODO: add min/max after bigint support
> {
    readonly max: number;
    readonly min: number;
    readonly step: number;
    readonly icons: Readonly<{
        decrease: string;
        increase: string;
    }>;
    readonly valueTransformer: TuiValueTransformer<number | null, any> | null;
}

export const TUI_INPUT_NUMBER_DEFAULT_OPTIONS: TuiInputNumberOptions = {
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    prefix: '',
    postfix: '',
    minusSign: CHAR_MINUS,
    step: 0,
    icons: {
        increase: '@tui.plus',
        decrease: '@tui.minus',
    },
    valueTransformer: null,
};

export const [TUI_INPUT_NUMBER_OPTIONS, tuiInputNumberOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
);
