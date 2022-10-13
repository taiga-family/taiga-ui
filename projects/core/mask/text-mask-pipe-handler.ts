import type {TuiTextMaskConfig} from './text-mask-config';
import type {TuiTextMaskOptions} from './text-mask-options';
import type {TuiTextMaskPipeResult} from './text-mask-pipe-result';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
 */
export type TuiTextMaskPipeHandler = (
    conformedValue: string,
    config: TuiTextMaskOptions & TuiTextMaskConfig,
) => string | TuiTextMaskPipeResult | false;
