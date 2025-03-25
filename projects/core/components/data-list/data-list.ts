import {TuiDataListComponent} from './data-list.component';
import {TuiDataListDirective} from './data-list.directive';
import {TuiOptGroup} from './opt-group.directive';
import {TuiOptionNew, TuiOptionWithValue} from './option/option.directive';
import {TuiOption} from './option/option-legacy.component';

export const TuiDataList = [
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOption,
    TuiOptionNew,
    TuiOptionWithValue,
    TuiOptGroup,
] as const;
