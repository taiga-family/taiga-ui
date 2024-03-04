import {type TuiDay, type TuiHandler} from '@taiga-ui/cdk';

export type TuiMarkerHandler = TuiHandler<TuiDay, [] | [string, string] | [string]>;
