import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHintsHostComponent} from './hints-host.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiActiveZoneDirective],
    declarations: [TuiHintsHostComponent],
    exports: [TuiHintsHostComponent],
})
export class TuiHintsHostModule {}
