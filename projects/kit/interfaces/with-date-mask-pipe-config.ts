import {TuiWithOptionalMinMaxWithValue} from '@taiga-ui/core';

/**
 * @deprecated TODO: 3.0 get rid of this
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface WithDateMaskPipeConfig<T, G>
    extends TuiWithOptionalMinMaxWithValue<T, G> {
    filler: string;
    rangeFiller?: string;
}
