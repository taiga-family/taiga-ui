import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiInputCountModule, TuiTabsModule} from '@taiga-ui/kit';
import {TuiTabsExample1} from './examples/1';
import {TuiTabsExample2} from './examples/2';
import {TuiTabsExample3} from './examples/3';
import {TuiTabsExample4} from './examples/4';
import {TuiTabsExample5} from './examples/5';
import {TuiTabsExample6} from './examples/6';
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
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiTabsComponent)),
        TuiHostedDropdownModule,
        TuiDataListModule,
    ],
    declarations: [
        ExampleTuiTabsComponent,
        TuiTabsExample1,
        TuiTabsExample2,
        TuiTabsExample3,
        TuiTabsExample4,
        TuiTabsExample5,
        TuiTabsExample6,
    ],
    exports: [ExampleTuiTabsComponent],
})
export class ExampleTuiTabsModule {}
