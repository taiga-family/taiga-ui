import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiAutoColorModule,
    TuiAvatarModule,
    TuiAvatarStackModule,
    TuiInitialsModule,
} from '@taiga-ui/experimental';

import {ExampleTuiAvatarComponent} from './avatar.component';
import {TuiAvatarExample1} from './examples/1';
import {TuiAvatarExample2} from './examples/2';
import {TuiAvatarExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarModule,
        TuiAvatarStackModule,
        TuiAutoColorModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAvatarComponent)),
        TuiInitialsModule,
    ],
    declarations: [
        ExampleTuiAvatarComponent,
        TuiAvatarExample1,
        TuiAvatarExample2,
        TuiAvatarExample3,
    ],
    exports: [ExampleTuiAvatarComponent],
})
export class ExampleTuiAvatarModule {}
