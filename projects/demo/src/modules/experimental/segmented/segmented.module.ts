import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiIconComponent,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiSegmentedComponent} from '@taiga-ui/experimental';
import {TuiBadgeNotificationComponent, TuiFadeDirective} from '@taiga-ui/kit';

import {TuiSegmentedExample1} from './examples/1';
import {TuiSegmentedExample2} from './examples/2';
import {TuiSegmentedExample3} from './examples/3';
import {TuiSegmentedExample4} from './examples/4';
import {ExampleTuiSegmentedComponent} from './segmented.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSegmentedComponent,
        TuiNotificationModule,
        TuiBadgeNotificationComponent,
        TuiFadeDirective,
        tuiGetDocModules(ExampleTuiSegmentedComponent),
        FormsModule,
        TuiIconComponent,
        TuiButtonDirective,
    ],
    declarations: [
        ExampleTuiSegmentedComponent,
        TuiSegmentedExample1,
        TuiSegmentedExample2,
        TuiSegmentedExample3,
        TuiSegmentedExample4,
    ],
    exports: [ExampleTuiSegmentedComponent],
})
export class ExampleTuiSegmentedModule {}
