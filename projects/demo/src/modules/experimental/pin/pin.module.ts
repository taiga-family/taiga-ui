import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiIconComponent, TuiNotificationModule} from '@taiga-ui/core';
import {TuiPinModule} from '@taiga-ui/experimental';

import {TuiPinExample1} from './examples/1';
import {TuiPinExample2} from './examples/2';
import {TuiPinExample3} from './examples/3';
import {ExampleTuiPinComponent} from './pin.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPinModule,
        TuiNotificationModule,
        TuiIconComponent,
        tuiGetDocModules(ExampleTuiPinComponent),
    ],
    declarations: [
        ExampleTuiPinComponent,
        TuiPinExample1,
        TuiPinExample2,
        TuiPinExample3,
    ],
    exports: [ExampleTuiPinComponent],
})
export class ExampleTuiPinModule {}
