import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiLinkDirective,
    TuiNotificationModule,
    TuiScrollableDirective,
    TuiScrollbarComponent,
} from '@taiga-ui/core';
import {TuiFadeDirective} from '@taiga-ui/kit';

import {TuiFadeExample1} from './examples/1';
import {TuiFadeExample2} from './examples/2';
import {TuiFadeExample3} from './examples/3';
import {ExampleTuiFadeComponent} from './fade.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFadeDirective,
        TuiNotificationModule,
        TuiScrollbarComponent,
        TuiLinkDirective,
        tuiGetDocModules(ExampleTuiFadeComponent),
        TuiScrollableDirective,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiFadeComponent,
        TuiFadeExample1,
        TuiFadeExample2,
        TuiFadeExample3,
    ],
    exports: [ExampleTuiFadeComponent],
})
export class ExampleTuiFadeDirective {}
