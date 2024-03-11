import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [AlertExampleWithCustomLabelComponent],
    exports: [AlertExampleWithCustomLabelComponent],
})
export class AlertExampleWithCustomLabelModule {}
