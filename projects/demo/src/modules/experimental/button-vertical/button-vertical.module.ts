import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiButtonModule, TuiButtonVerticalModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent, TuiFadeDirective} from '@taiga-ui/kit';

import {ExampleTuiButtonVerticalComponent} from './button-vertical.component';
import {TuiButtonVerticalExample1} from './examples/1';
import {TuiButtonVerticalExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiButtonVerticalModule,
        TuiFadeDirective,
        TuiAvatarComponent,
        TuiNotificationModule,
        TuiSvgModule,
        tuiGetDocModules(ExampleTuiButtonVerticalComponent),
    ],
    declarations: [
        ExampleTuiButtonVerticalComponent,
        TuiButtonVerticalExample1,
        TuiButtonVerticalExample2,
    ],
    exports: [ExampleTuiButtonVerticalComponent],
})
export class ExampleTuiButtonModule {}
