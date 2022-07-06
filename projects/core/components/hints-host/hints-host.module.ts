import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHintBoxModule} from './hint-box/hint-box.module';
import {TuiHintsHostComponent} from './hints-host.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiHintBoxModule, TuiActiveZoneModule],
    declarations: [TuiHintsHostComponent],
    exports: [TuiHintsHostComponent],
})
export class TuiHintsHostModule {}
