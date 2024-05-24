import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiIconComponent,
    TuiNotificationComponent,
    TuiScrollbarComponent,
} from '@taiga-ui/core';
import {TuiChevronDirective, TuiTabsModule} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

import {TuiTabsExample1} from './examples/1';
import {TuiTabsExample2} from './examples/2';
import {TuiTabsExample3} from './examples/3';
import {TuiTabsExample4} from './examples/4';
import {TuiTabsExample5} from './examples/5';
import {TuiTabsExample6} from './examples/6';
import {TuiTabsExample7} from './examples/7';
import {ExampleTuiTabsComponent} from './tabs.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiTabsModule,
        TuiInputNumberModule,
        TuiNotificationComponent,
        TuiButtonDirective,
        TuiDropdownModule,
        TuiDataList,
        TuiScrollbarComponent,
        TuiActiveZoneDirective,
        TuiExamplePipe,
        TuiSetupComponent,
        tuiGetDocModules(ExampleTuiTabsComponent),
        TuiChevronDirective,
        TuiIconComponent,
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
    ],
    exports: [ExampleTuiTabsComponent],
})
export class ExampleTuiTabsModule {}
