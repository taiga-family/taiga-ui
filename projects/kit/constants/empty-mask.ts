import {TuiTextMaskOptions} from '@taiga-ui/core';

/**
 * @deprecated Use {@link https://github.com/Tinkoff/maskito Maskito} instead
 * TODO: delete in v4.0
 */
export const EMPTY_MASK: TuiTextMaskOptions = {
    mask(): false {
        return false;
    },
};
