import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHintsHostComponent} from './hints-host.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiActiveZoneModule],
    declarations: [TuiHintsHostComponent],
    exports: [TuiHintsHostComponent],
})
export class TuiHintsHostModule {}
