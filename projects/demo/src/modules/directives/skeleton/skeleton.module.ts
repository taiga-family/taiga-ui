import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiNotificationModule,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiChipDirective,
    TuiSkeletonDirective,
    TuiSwitchComponent,
} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiHeaderDirective} from '@taiga-ui/layout';

import {TuiSkeletonExample1} from './examples/1';
import {TuiSkeletonExample2} from './examples/2';
import {ExampleTuiSkeletonComponent} from './skeleton.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        tuiGetDocModules(ExampleTuiSkeletonComponent),
        TuiSetupComponent,
        TuiExamplePipe,
        TuiLabelDirective,
        TuiSwitchComponent,
        TuiAvatarComponent,
        TuiCardLargeDirective,
        TuiTitleDirective,
        TuiSurfaceDirective,
        TuiHeaderDirective,
        TuiButtonDirective,
        TuiChipDirective,
        TuiBadgeDirective,
        TuiSkeletonDirective,
        TuiNotificationModule,
    ],
    declarations: [ExampleTuiSkeletonComponent, TuiSkeletonExample1, TuiSkeletonExample2],
    exports: [ExampleTuiSkeletonComponent],
})
export class ExampleTuiSkeletonModule {}
