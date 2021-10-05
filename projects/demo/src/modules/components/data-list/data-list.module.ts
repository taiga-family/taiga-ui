import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule, TuiFilterPipeModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiArrowModule, TuiMultiSelectModule, TuiSelectModule} from '@taiga-ui/kit';
import {ExampleTuiDataListComponent} from './data-list.component';
import {TuiDataListExample1} from './examples/1';
import {TuiDataListExample2} from './examples/2';
import {TuiDataListExample3} from './examples/3';
import {TuiDataListExample4} from './examples/4';
import {CustomListComponent} from './examples/4/custom-list/custom-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
    ],
    declarations: [
        ExampleTuiDataListComponent,
        CustomListComponent,
        TuiDataListExample1,
        TuiDataListExample2,
        TuiDataListExample3,
        TuiDataListExample4,
    ],
    exports: [ExampleTuiDataListComponent],
})
export class ExampleTuiDataListModule {}
