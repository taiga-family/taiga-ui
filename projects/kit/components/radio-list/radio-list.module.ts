import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRadioGroupModule} from '@taiga-ui/kit/components/radio-group';
import {TuiRadioLabeledModule} from '@taiga-ui/kit/components/radio-labeled';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiRadioListComponent} from './radio-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiRadioGroupModule,
        TuiRadioLabeledModule,
    ],
    declarations: [TuiRadioListComponent],
    exports: [TuiRadioListComponent],
})
export class TuiRadioListModule {}
