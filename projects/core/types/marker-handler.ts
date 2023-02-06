import {TuiDay, TuiHandler} from '@taiga-ui/cdk';

import {TuiColor} from './color';

export type TuiMarkerHandler = TuiHandler<
    TuiDay,
    [] | [TuiColor | string, TuiColor | string] | [TuiColor | string]
>;
