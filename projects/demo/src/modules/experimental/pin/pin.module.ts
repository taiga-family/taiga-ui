import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiPinModule} from '@taiga-ui/experimental';

import {TuiPinExample1} from './examples/1';
import {TuiPinExample2} from './examples/2';
import {TuiPinExample3} from './examples/3';
import {TuiPinExample4} from './examples/4';
import {TuiPinExample5} from './examples/5';
import {ExampleTuiPinComponent} from './pin.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiPinModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPinComponent)),
        TuiNotificationModule,
    ],
    declarations: [
        ExampleTuiPinComponent,
        TuiPinExample1,
        TuiPinExample2,
        TuiPinExample3,
        TuiPinExample4,
        TuiPinExample5,
    ],
    exports: [ExampleTuiPinComponent],
})
export class ExampleTuiPinModule {}
