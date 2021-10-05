import {TuiTextMaskConfig} from './text-mask-config';
import {TuiTextMaskList} from './text-mask-list';

export type TuiTextMaskListHandler = (
    rawValue: string,
    config: TuiTextMaskConfig,
) => TuiTextMaskList | false;
