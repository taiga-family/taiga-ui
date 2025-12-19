import {type MaskitoTimeParams} from '@maskito/kit';
import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {type TuiTime} from '@taiga-ui/cdk/date-time';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiInputTimeOptions extends Required<
    Pick<MaskitoTimeParams, 'mode' | 'timeSegmentMaxValues' | 'timeSegmentMinValues'>
> {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
    readonly valueTransformer: TuiValueTransformer<TuiTime | null, any> | null;
}

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: () => '@tui.clock',
    mode: 'HH:MM',
    timeSegmentMaxValues: {},
    timeSegmentMinValues: {},
    valueTransformer: null,
};

export const [TUI_INPUT_TIME_OPTIONS, tuiInputTimeOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_TIME_DEFAULT_OPTIONS,
);
