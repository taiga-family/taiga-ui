import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFocusableModule, TuiFocusedModule} from '@taiga-ui/cdk';
import {TuiRadioModule} from '@taiga-ui/kit/components/radio';

import {TuiRadioLabeledComponent} from './radio-labeled.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiFocusableModule,
        TuiFocusedModule,
        TuiRadioModule,
    ],
    declarations: [TuiRadioLabeledComponent],
    exports: [TuiRadioLabeledComponent],
})
export class TuiRadioLabeledModule {}
