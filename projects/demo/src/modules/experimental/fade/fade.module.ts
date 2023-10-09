import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule, TuiScrollbarModule} from '@taiga-ui/core';
import {TuiFadeModule} from '@taiga-ui/experimental';

import {TuiFadeExample1} from './examples/1';
import {TuiFadeExample2} from './examples/2';
import {TuiFadeExample3} from './examples/3';
import {ExampleTuiFadeComponent} from './fade.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFadeModule,
        TuiNotificationModule,
        TuiScrollbarModule,
        TuiLinkModule,
        tuiGetDocModules(ExampleTuiFadeComponent),
    ],
    declarations: [
        ExampleTuiFadeComponent,
        TuiFadeExample1,
        TuiFadeExample2,
        TuiFadeExample3,
    ],
    exports: [ExampleTuiFadeComponent],
})
export class ExampleTuiFadeModule {}
