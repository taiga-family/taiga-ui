import type {TuiBrightness} from '@taiga-ui/core';

export interface TuiTableBarOptions {
    readonly adaptive?: boolean;
    readonly mode?: TuiBrightness;
    readonly hasCloseButton?: boolean;
}
