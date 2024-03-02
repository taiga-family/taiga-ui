import {type TuiBooleanHandler, type TuiDay} from '@taiga-ui/cdk';

export interface TuiMobileCalendarData {
    disabledItemHandler?: TuiBooleanHandler<TuiDay>;
    max?: TuiDay | null;
    min?: TuiDay | null;
    multi?: boolean;
    single?: boolean;
}
