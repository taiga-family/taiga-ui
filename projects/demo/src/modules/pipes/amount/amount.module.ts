import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiLinkModule,
    TuiNotificationModule,
    TuiNumberFormatModule,
} from '@taiga-ui/core';

import {ExampleTuiAmountComponent} from './amount.component';
import {TuiAmountExample1} from './examples/1';
import {TuiAmountExample2} from './examples/2';
import {TuiAmountExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiAmountPipe,
        TuiNotificationModule,
        TuiNumberFormatModule,
        tuiGetDocModules(ExampleTuiAmountComponent),
        TuiLinkModule,
    ],
    declarations: [
        ExampleTuiAmountComponent,
        TuiAmountExample1,
        TuiAmountExample2,
        TuiAmountExample3,
    ],
    exports: [ExampleTuiAmountComponent],
})
export class ExampleTuiAmountModule {}
