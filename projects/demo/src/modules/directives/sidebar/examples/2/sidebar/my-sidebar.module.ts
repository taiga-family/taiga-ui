import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {MySidebarComponent} from './my-sidebar.component';

@NgModule({
    imports: [PolymorpheusModule, TuiActiveZoneModule, CommonModule],
    declarations: [MySidebarComponent],
    exports: [MySidebarComponent],
})
export class MySidebarModule {}
