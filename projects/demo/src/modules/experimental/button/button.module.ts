import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiButtonModule, TuiIconModule} from '@taiga-ui/experimental';

import {ExampleTuiButtonComponent} from './button.component';
import {TuiButtonExample1} from './examples/1';
import {TuiButtonExample2} from './examples/2';
import {TuiButtonExample3} from './examples/3';
import {TuiButtonExample4} from './examples/4';
import {TuiButtonExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiNotificationModule,
        TuiIconModule,
        TuiAvatarModule,
        tuiGetDocModules(ExampleTuiButtonComponent),
    ],
    declarations: [
        ExampleTuiButtonComponent,
        TuiButtonExample1,
        TuiButtonExample2,
        TuiButtonExample3,
        TuiButtonExample4,
        TuiButtonExample5,
    ],
    exports: [ExampleTuiButtonComponent],
})
export class ExampleTuiButtonModule {}
