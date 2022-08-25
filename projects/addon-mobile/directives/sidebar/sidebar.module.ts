import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiSidebarPortalDirective} from './portal/sidebar-portal.directive';
import {TuiSidebarPortalHostComponent} from './portal/sidebar-portal-host.component';
import {TuiSidebarComponent} from './sidebar.component';
import {TuiSidebarDirective} from './sidebar.directive';

@NgModule({
    imports: [TuiActiveZoneModule, PolymorpheusModule],
    declarations: [
        TuiSidebarDirective,
        TuiSidebarComponent,
        TuiSidebarPortalHostComponent,
        TuiSidebarPortalDirective,
    ],
    entryComponents: [TuiSidebarComponent],
    exports: [
        TuiSidebarDirective,
        TuiSidebarPortalDirective,
        TuiSidebarPortalHostComponent,
    ],
})
export class TuiSidebarModule {}
