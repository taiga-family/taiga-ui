import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTableBarsHostComponent} from './table-bars-host.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiButtonDirective],
    declarations: [TuiTableBarsHostComponent],
    exports: [TuiTableBarsHostComponent],
})
export class TuiTableBarsHostModule {}
