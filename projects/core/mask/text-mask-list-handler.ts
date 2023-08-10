import {TuiTextMaskConfig} from './text-mask-config';
import {TuiTextMaskList} from './text-mask-list';

/**
 * @deprecated Use {@link https://github.com/taiga-family/maskito Maskito}
 */
export type TuiTextMaskListHandler = (
    rawValue: string,
    config: TuiTextMaskConfig,
) => TuiTextMaskList | false;
