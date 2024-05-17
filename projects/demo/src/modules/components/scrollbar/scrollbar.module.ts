import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiNotificationComponent,
    TuiScrollableDirective,
    TuiScrollbarComponent,
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
        TuiButtonDirective,
        TuiScrollbarComponent,
        TuiNotificationComponent,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiScrollbarComponent)),
        TuiScrollableDirective,
        TuiSetupComponent,
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
