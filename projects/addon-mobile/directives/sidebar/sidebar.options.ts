import {DoCheck, InjectionToken} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiSidebarComponent} from './sidebar.component';

export interface TuiSidebar extends DoCheck {}

export const TUI_SIDEBAR_CONTAINER = new InjectionToken<
    PolymorpheusComponent<TuiSidebar, any>
>(`sidebar container`, {
    factory: () => new PolymorpheusComponent<TuiSidebar, any>(TuiSidebarComponent),
});
