import {TuiTextMaskList} from './text-mask-list';
import {TuiTextMaskListHandler} from './text-mask-list-handler';
import {TuiTextMaskPipeHandler} from './text-mask-pipe-handler';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#mask-array}
 */
export interface TuiTextMaskOptions {
    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#mask}
     */
    mask: TuiTextMaskList | TuiTextMaskListHandler;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#guide}
     */
    guide?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#placeholderchar}
     */
    placeholderChar?: string;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#pipe}
     */
    pipe?: TuiTextMaskPipeHandler;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#keepcharpositions}
     */
    keepCharPositions?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#showmask}
     */
    showMask?: boolean;
}
