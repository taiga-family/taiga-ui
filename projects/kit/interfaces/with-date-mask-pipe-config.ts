import {TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

/** @internal */
export interface WithDateMaskPipeConfig<T, G>
    extends TuiWithOptionalMinMaxWithValue<T, G> {
    /** @deprecated provide fillerLength only */
    filler?: string;
    fillerLength: number;
    /** @deprecated provide rangeFillerLength only */
    rangeFiller?: string;
    rangeFillerLength?: number;
}
