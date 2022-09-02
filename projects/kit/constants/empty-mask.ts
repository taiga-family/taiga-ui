import type {TuiTextMaskOptions} from '@taiga-ui/core';

export const EMPTY_MASK: TuiTextMaskOptions = {
    mask(): false {
        return false;
    },
};
