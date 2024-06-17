import {NgModule} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiSidebarComponent} from './sidebar.component';
import {TuiSidebarDirective} from './sidebar.directive';

@NgModule({
    imports: [TuiActiveZone, PolymorpheusOutlet, PolymorpheusTemplate],
    declarations: [TuiSidebarComponent, TuiSidebarDirective],
    exports: [TuiSidebarComponent, TuiSidebarDirective],
})
export class TuiSidebar {}
