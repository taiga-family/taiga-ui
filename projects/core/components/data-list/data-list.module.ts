import {TuiDataListComponent} from './data-list.component';
import {TuiDataListDirective} from './data-list.directive';
import {TuiOptGroup} from './opt-group.directive';
import {TuiOption} from './option.component';

export const TuiDataList = [
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOption,
    TuiOptGroup,
] as const;
