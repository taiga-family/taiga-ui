import {type MaskitoTimeParams} from '@maskito/kit';
import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {type TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiInputTimeOptions extends Required<
    Pick<MaskitoTimeParams, 'mode' | 'timeSegmentMaxValues' | 'timeSegmentMinValues'>
> {
    readonly icon: string;
    readonly valueTransformer: TuiValueTransformer<TuiTime | null, any> | null;
}

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: '@tui.clock',
    mode: 'HH:MM',
    timeSegmentMaxValues: {},
    timeSegmentMinValues: {},
    valueTransformer: null,
};

export const [TUI_INPUT_TIME_OPTIONS, tuiInputTimeOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_TIME_DEFAULT_OPTIONS,
);
