import {TuiBooleanHandler, TuiDay} from '@taiga-ui/cdk';

export interface TuiMobileCalendarData {
    disabledItemHandler?: TuiBooleanHandler<TuiDay>;
    max?: TuiDay;
    min?: TuiDay;
    single?: boolean;
}
