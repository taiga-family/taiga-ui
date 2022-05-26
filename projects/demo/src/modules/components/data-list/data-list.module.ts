import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule, TuiFilterPipeModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiCalendarModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiDropdownModule,
    TuiGroupModule,
    TuiHostedDropdownModule,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiArrowModule,
    TuiDropdownHoverModule,
    TuiInputDateRangeModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {ExampleTuiDataListComponent} from './data-list.component';
import {TuiDataListExample1} from './examples/1';
import {TuiDataListExample2} from './examples/2';
import {TuiDataListExample3} from './examples/3';
import {TuiDataListExample4} from './examples/4';
import {CustomListComponent} from './examples/4/custom-list/custom-list.component';
import {TuiDataListExample5} from './examples/5';
import {TuiDataListExample6} from './examples/6';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLetModule,
        TuiMultiSelectModule,
        TuiPrimitiveTextfieldModule,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        TuiArrowModule,
        TuiNotificationModule,
        TuiDataListModule,
        TuiSvgModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiDropdownModule,
        TuiActiveZoneModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDataListComponent)),
        TuiFilterPipeModule,
        TuiCalendarModule,
        TuiInputModule,
        TuiInputDateRangeModule,
        TuiDropdownHoverModule,
        TuiMoneyModule,
        TuiGroupModule,
        TuiDropdownControllerModule,
    ],
    declarations: [
        ExampleTuiDataListComponent,
        CustomListComponent,
        TuiDataListExample1,
        TuiDataListExample2,
        TuiDataListExample3,
        TuiDataListExample4,
        TuiDataListExample5,
        TuiDataListExample6,
    ],
    exports: [ExampleTuiDataListComponent],
})
export class ExampleTuiDataListModule {}
