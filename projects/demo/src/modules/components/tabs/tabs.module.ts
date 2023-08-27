import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMobileTabsModule, TuiRippleModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiScrollbarModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiInputCountModule, TuiTabsModule} from '@taiga-ui/kit';

import {TuiTabsExample1} from './examples/1';
import {TuiTabsExample2} from './examples/2';
import {TuiTabsExample3} from './examples/3';
import {TuiTabsExample4} from './examples/4';
import {TuiTabsExample5} from './examples/5';
import {TuiTabsExample6} from './examples/6';
import {TuiTabsExample7} from './examples/7';
import {TuiTabsExample8} from './examples/8';
import {TuiTabsExample9} from './examples/9';
import {ExampleTuiTabsComponent} from './tabs.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiRippleModule,
        TuiTabsModule,
        TuiInputCountModule,
        TuiModeModule,
        TuiNotificationModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiAddonDocModule,
        TuiMobileTabsModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTabsComponent)),
        TuiScrollbarModule,
    ],
    declarations: [
        ExampleTuiTabsComponent,
        TuiTabsExample1,
        TuiTabsExample2,
        TuiTabsExample3,
        TuiTabsExample4,
        TuiTabsExample5,
        TuiTabsExample6,
        TuiTabsExample7,
        TuiTabsExample8,
        TuiTabsExample9,
    ],
    exports: [ExampleTuiTabsComponent],
})
export class ExampleTuiTabsModule {}
