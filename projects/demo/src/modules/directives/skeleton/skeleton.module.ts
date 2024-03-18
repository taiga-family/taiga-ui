import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiButtonModule,
    TuiCardModule,
    TuiChipModule,
    TuiHeaderDirective,
    TuiLabelDirective,
    TuiSurfaceModule,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {TuiAvatarComponent, TuiBadgeDirective, TuiSkeletonDirective} from '@taiga-ui/kit';

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
        TuiToggleModule,
        TuiAvatarComponent,
        TuiCardModule,
        TuiTitleModule,
        TuiSurfaceModule,
        TuiHeaderDirective,
        TuiButtonModule,
        TuiChipModule,
        TuiBadgeDirective,
        TuiSkeletonDirective,
        TuiNotificationModule,
    ],
    declarations: [ExampleTuiSkeletonComponent, TuiSkeletonExample1, TuiSkeletonExample2],
    exports: [ExampleTuiSkeletonComponent],
})
export class ExampleTuiSkeletonModule {}
