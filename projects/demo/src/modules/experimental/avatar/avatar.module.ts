import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAutoColorModule,
    TuiAvatarLabeledComponent,
    TuiAvatarModule,
    TuiAvatarStackModule,
    TuiFadeModule,
    TuiFallbackSrcModule,
    TuiInitialsModule,
} from '@taiga-ui/experimental';

import {ExampleTuiAvatarComponent} from './avatar.component';
import {TuiAvatarExample1} from './examples/1';
import {TuiAvatarExample2} from './examples/2';
import {TuiAvatarExample3} from './examples/3';
import {TuiAvatarExample4} from './examples/4';
import {TuiAvatarExample5} from './examples/5';
import {TuiAvatarExample6} from './examples/6';

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarModule,
        TuiAvatarStackModule,
        TuiAvatarLabeledComponent,
        TuiAutoColorModule,
        TuiInitialsModule,
        TuiNotificationModule,
        TuiFallbackSrcModule,
        TuiFadeModule,
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
    ],
    exports: [ExampleTuiAvatarComponent],
})
export class ExampleTuiAvatarModule {}
