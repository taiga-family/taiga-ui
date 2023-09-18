import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiButtonLoaderModule,
    TuiButtonModule,
} from '@taiga-ui/experimental';

import {ExampleTuiButtonComponent} from './button.component';
import {TuiButtonExample1} from './examples/1';
import {TuiButtonExample2} from './examples/2';
import {TuiButtonExample3} from './examples/3';
import {TuiButtonExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiButtonLoaderModule,
        TuiNotificationModule,
        TuiSvgModule,
        TuiAvatarModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiButtonComponent)),
    ],
    declarations: [
        ExampleTuiButtonComponent,
        TuiButtonExample1,
        TuiButtonExample2,
        TuiButtonExample3,
        TuiButtonExample4,
    ],
    exports: [ExampleTuiButtonComponent],
})
export class ExampleTuiButtonModule {}
