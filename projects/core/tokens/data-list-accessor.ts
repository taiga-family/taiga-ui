import {InjectionToken} from '@angular/core';
import {TuiDataListAccessor} from '@taiga-ui/core/interfaces';

export const TUI_DATA_LIST_ACCESSOR = new InjectionToken<TuiDataListAccessor>(
    `Accessor for options`,
);
