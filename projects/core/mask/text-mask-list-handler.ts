import type {TuiTextMaskConfig} from './text-mask-config';
import type {TuiTextMaskList} from './text-mask-list';

export type TuiTextMaskListHandler = (
    rawValue: string,
    config: TuiTextMaskConfig,
) => TuiTextMaskList | false;
