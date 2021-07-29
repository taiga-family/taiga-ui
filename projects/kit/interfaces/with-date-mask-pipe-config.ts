import {TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

/**
 * @deprecated TODO: get rid of this in v3.0
 * @internal
 */
export interface WithDateMaskPipeConfig<T, G>
    extends TuiWithOptionalMinMaxWithValue<T, G> {
    filler: string;
    rangeFiller?: string;
}
