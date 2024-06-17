import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiSidebarComponent} from './sidebar.component';
import {TuiSidebarDirective} from './sidebar.directive';

@NgModule({
    imports: [TuiActiveZoneDirective, PolymorpheusOutlet, PolymorpheusTemplate],
    declarations: [TuiSidebarComponent, TuiSidebarDirective],
    exports: [TuiSidebarComponent, TuiSidebarDirective],
})
export class TuiSidebar {}
