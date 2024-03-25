import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiSidebarComponent} from './sidebar.component';
import {TuiSidebarDirective} from './sidebar.directive';

@NgModule({
    imports: [TuiActiveZoneDirective, PolymorpheusModule],
    declarations: [TuiSidebarDirective, TuiSidebarComponent],
    exports: [TuiSidebarDirective],
})
export class TuiSidebarModule {}
