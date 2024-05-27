import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAutoColorModule,
    TuiAvatarLabeledModule,
    TuiAvatarModule,
    TuiAvatarOutlineModule,
    TuiAvatarStackModule,
    TuiFadeModule,
    TuiFallbackSrcModule,
    TuiIconModule,
    TuiInitialsModule,
} from '@taiga-ui/experimental';

import {ExampleTuiAvatarComponent} from './avatar.component';
import {TuiAvatarExample1} from './examples/1';
import {TuiAvatarExample2} from './examples/2';
import {TuiAvatarExample3} from './examples/3';
import {TuiAvatarExample4} from './examples/4';
import {TuiAvatarExample5} from './examples/5';
import {TuiAvatarExample6} from './examples/6';
import {TuiAvatarExample7} from './examples/7';
import {TuiAvatarExample8} from './examples/8';

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarModule,
        TuiAvatarStackModule,
        TuiAvatarLabeledModule,
        TuiAvatarOutlineModule,
        TuiAutoColorModule,
        TuiInitialsModule,
        TuiNotificationModule,
        TuiFallbackSrcModule,
        TuiFadeModule,
        TuiIconModule,
        tuiGetDocModules(ExampleTuiAvatarComponent),
    ],
    declarations: [
        ExampleTuiAvatarComponent,
        TuiAvatarExample1,
        TuiAvatarExample2,
        TuiAvatarExample3,
        TuiAvatarExample4,
        TuiAvatarExample5,
        TuiAvatarExample6,
        TuiAvatarExample7,
        TuiAvatarExample8,
    ],
    exports: [ExampleTuiAvatarComponent],
})
export class ExampleTuiAvatarModule {}
