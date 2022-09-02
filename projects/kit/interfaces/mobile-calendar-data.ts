import type {TuiBooleanHandler, TuiDay} from '@taiga-ui/cdk';

export interface TuiMobileCalendarData {
    single?: boolean;
    min?: TuiDay;
    max?: TuiDay;
    disabledItemHandler?: TuiBooleanHandler<TuiDay>;
}
