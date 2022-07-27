import {InjectionToken} from '@angular/core';
import {TuiDataListHost} from '@taiga-ui/core/interfaces';

export const TUI_DATA_LIST_HOST = new InjectionToken<TuiDataListHost<unknown>>(
    `DataList controller`,
);
