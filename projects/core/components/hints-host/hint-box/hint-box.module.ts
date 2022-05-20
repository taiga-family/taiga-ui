import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHintBoxComponent} from './hint-box.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TuiHintBoxComponent],
    exports: [TuiHintBoxComponent],
    entryComponents: [TuiHintBoxComponent],
})
export class TuiHintBoxModule {}
