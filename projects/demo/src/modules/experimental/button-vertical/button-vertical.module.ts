import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiButtonModule, TuiFadeModule} from '@taiga-ui/experimental';
import {TuiButtonVerticalModule} from '@taiga-ui/experimental';

import {ExampleTuiButtonVerticalComponent} from './button-vertical.component';
import {TuiButtonVerticalExample1} from './examples/1';
import {TuiButtonVerticalExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiButtonVerticalModule,
        TuiFadeModule,
        TuiAvatarModule,
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
