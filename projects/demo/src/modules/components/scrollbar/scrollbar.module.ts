import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiScrollbarModule,
} from '@taiga-ui/core';

import {TuiScrollbarExample1Component} from './examples/1/component';
import {TuiScrollbarExample2Component} from './examples/2/component';
import {TuiScrollbarExample3Component} from './examples/3/component';
import {TuiScrollbarExample4Component} from './examples/4/component';
import {TuiScrollbarExample5Component} from './examples/5/component';
import {TuiScrollbarExample6Component} from './examples/6/component';
import {ExampleTuiScrollbarComponent} from './scrollbar.component';

@NgModule({
    imports: [
        CommonModule,
        ScrollingModule,
        TuiButtonModule,
        TuiScrollbarModule,
        TuiModeModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiScrollbarComponent)),
    ],
    declarations: [
        ExampleTuiScrollbarComponent,
        TuiScrollbarExample1Component,
        TuiScrollbarExample2Component,
        TuiScrollbarExample3Component,
        TuiScrollbarExample4Component,
        TuiScrollbarExample5Component,
        TuiScrollbarExample6Component,
    ],
    exports: [ExampleTuiScrollbarComponent],
})
export class ExampleTuiScrollbarModule {}
