import {TuiTextMaskOptions} from '@taiga-ui/core';

/**
 * @deprecated Use {@link https://github.com/taiga-family/maskito Maskito} instead
 * TODO: delete in v4.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EMPTY_MASK: TuiTextMaskOptions = {
    mask(): false {
        return false;
    },
};
