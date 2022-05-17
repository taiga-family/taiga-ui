import {TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

/**
 * @deprecated TODO: 3.0 get rid of this
 * @internal
 */
export interface WithDateMaskPipeConfig<T, G>
    extends TuiWithOptionalMinMaxWithValue<T, G> {
    filler: string;
    rangeFiller?: string;
}
