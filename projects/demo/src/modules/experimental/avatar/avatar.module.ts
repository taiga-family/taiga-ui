import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAutoColorModule,
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

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarModule,
        TuiAvatarStackModule,
        TuiAutoColorModule,
        TuiAddonDocModule,
        TuiInitialsModule,
        TuiNotificationModule,
        TuiFallbackSrcModule,
        TuiFadeModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAvatarComponent)),
    ],
    declarations: [
        ExampleTuiAvatarComponent,
        TuiAvatarExample1,
        TuiAvatarExample2,
        TuiAvatarExample3,
        TuiAvatarExample4,
    ],
    exports: [ExampleTuiAvatarComponent],
})
export class ExampleTuiAvatarModule {}
