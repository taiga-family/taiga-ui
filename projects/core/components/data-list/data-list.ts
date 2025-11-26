import {TuiDataListComponent} from './data-list.component';
import {TuiOptGroup} from './opt-group.directive';
import {TuiOption} from './option.directive';
import {TuiOptionWithValue} from './option-with-value.directive';

export const TuiDataList = [
    TuiDataListComponent,
    TuiOption,
    TuiOptionWithValue,
    TuiOptGroup,
] as const;
