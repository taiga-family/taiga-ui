import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiBadgeModule,
    TuiButtonModule,
    TuiCardModule,
    TuiChipModule,
    TuiHeaderModule,
    TuiSkeletonModule,
    TuiSurfaceModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';

import {TuiSkeletonExample1} from './examples/1';
import {TuiSkeletonExample2} from './examples/2';
import {ExampleTuiSkeletonComponent} from './skeleton.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSkeletonModule,
        TuiCardModule,
        TuiTitleModule,
        TuiSurfaceModule,
        TuiButtonModule,
        TuiChipModule,
        TuiBadgeModule,
        TuiNotificationModule,
        TuiAvatarModule,
        TuiHeaderModule,
        TuiCheckboxLabeledModule,
        tuiGetDocModules(ExampleTuiSkeletonComponent),
    ],
    declarations: [ExampleTuiSkeletonComponent, TuiSkeletonExample1, TuiSkeletonExample2],
    exports: [ExampleTuiSkeletonComponent],
})
export class ExampleTuiSkeletonModule {}
