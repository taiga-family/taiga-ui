import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiTitleModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent} from '@taiga-ui/kit';

import {TuiTitleExample1} from './examples/1';
import {TuiTitleExample2} from './examples/2';
import {TuiTitleExample3} from './examples/3';
import {ExampleTuiTitleComponent} from './title.component';

@NgModule({
    imports: [
        CommonModule,
        TuiTitleModule,
        TuiLinkModule,
        TuiAvatarComponent,
        TuiNotificationModule,
        tuiGetDocModules(ExampleTuiTitleComponent),
    ],
    declarations: [
        ExampleTuiTitleComponent,
        TuiTitleExample1,
        TuiTitleExample2,
        TuiTitleExample3,
    ],
    exports: [ExampleTuiTitleComponent],
})
export class ExampleTuiTitleModule {}
