import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButtonModule, TuiLinkModule, TuiModeModule} from '@taiga-ui/core';

import {AlertExampleWithDataComponent} from './alert-example-with-data.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiModeModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiAmountPipe,
    ],
    declarations: [AlertExampleWithDataComponent],
    exports: [AlertExampleWithDataComponent],
})
export class AlertExampleWithDataModule {}
