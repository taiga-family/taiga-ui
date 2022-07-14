import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDescribedByModule,
    TuiHintModule,
    TuiNotificationModule,
} from '@taiga-ui/core';

import {ExampleTuiDescribeByComponent} from './described-by.component';
import {TuiDescribedByExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDescribedByModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDescribeByComponent)),
    ],
    declarations: [ExampleTuiDescribeByComponent, TuiDescribedByExample1],
    exports: [ExampleTuiDescribeByComponent],
})
export class ExampleTuiDescribedByModule {}
