import {TuiDataListDirective} from '@taiga-ui/core';

import {TuiDataListGroupWrapperComponent} from './data-list-group-wrapper.component';
import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

export const TuiDataListWrapper = [
    TuiDataListWrapperComponent,
    TuiDataListGroupWrapperComponent,
    TuiDataListDirective,
] as const;
