import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiAmountPipeModule} from '@taiga-ui/experimental';

import {ExampleTuiAmountComponent} from './amount.component';
import {TuiAmountExample1} from './examples/1';
import {TuiAmountExample2} from './examples/2';
import {TuiAmountExample3} from './examples/3';
import {TuiAmountExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        TuiAmountPipeModule,
        TuiNotificationModule,
        tuiGetDocModules(ExampleTuiAmountComponent),
        TuiLinkModule,
    ],
    declarations: [
        ExampleTuiAmountComponent,
        TuiAmountExample1,
        TuiAmountExample2,
        TuiAmountExample3,
        TuiAmountExample4,
    ],
    exports: [ExampleTuiAmountComponent],
})
export class ExampleTuiAmountModule {}
