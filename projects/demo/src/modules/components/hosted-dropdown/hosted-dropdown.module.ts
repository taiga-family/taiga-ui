import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
    TuiTabsModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {DropdownDocumentationModule} from '../abstract/dropdown-documentation/dropdown-documentation.module';
import {TuiHostedDropdownExample1} from './examples/1';
import {TuiHostedDropdownExample2} from './examples/2';
import {TuiHostedDropdownExample3} from './examples/3';
import {TuiHostedDropdownExample4} from './examples/4';
import {ExampleTuiHostedDropdownComponent} from './hosted-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        FormsModule,
        TuiHostedDropdownModule,
        TuiNotificationModule,
        TuiTabsModule,
        TuiInputModule,
        TuiButtonModule,
        TuiGroupModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiSelectModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        DropdownDocumentationModule,
        TuiAddonDocModule,
        TuiToggleModule,
        TuiMultiSelectModule,
        TuiPreventDefaultModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHostedDropdownComponent)),
    ],
    declarations: [
        TuiHostedDropdownExample1,
        TuiHostedDropdownExample2,
        TuiHostedDropdownExample3,
        TuiHostedDropdownExample4,
        ExampleTuiHostedDropdownComponent,
    ],
    exports: [ExampleTuiHostedDropdownComponent],
})
export class ExampleTuiHostedDropdownModule {}
