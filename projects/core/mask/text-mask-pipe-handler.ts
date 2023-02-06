import {TuiTextMaskConfig} from './text-mask-config';
import {TuiTextMaskOptions} from './text-mask-options';
import {TuiTextMaskPipeResult} from './text-mask-pipe-result';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
 */
export type TuiTextMaskPipeHandler = (
    conformedValue: string,
    config: TuiTextMaskConfig & TuiTextMaskOptions,
) => TuiTextMaskPipeResult | string | false;
