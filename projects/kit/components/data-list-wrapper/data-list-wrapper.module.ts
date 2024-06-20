import {TuiDataListDirective} from '@taiga-ui/core/components/data-list';

import {TuiDataListGroupWrapperComponent} from './data-list-group-wrapper.component';
import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

export const TuiDataListWrapper = [
    TuiDataListWrapperComponent,
    TuiDataListGroupWrapperComponent,
    TuiDataListDirective,
] as const;
