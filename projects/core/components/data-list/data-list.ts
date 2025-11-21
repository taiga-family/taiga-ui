import {TuiDataListComponent} from './data-list.component';
import {TuiOptGroup} from './opt-group.directive';
import {TuiOption, TuiOptionWithValue} from './option/option.directive';

export const TuiDataList = [
    TuiDataListComponent,
    TuiOption,
    TuiOptionWithValue,
    TuiOptGroup,
] as const;
