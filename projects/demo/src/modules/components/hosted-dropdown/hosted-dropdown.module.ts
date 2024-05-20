import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiHostedDropdownModule,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
    TuiTabsModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {DropdownDocumentationModule} from '../abstract/dropdown-documentation/dropdown-documentation.module';
import {TuiHostedDropdownExample1} from './examples/1';
import {TuiHostedDropdownExample2} from './examples/2';
import {TuiHostedDropdownExample3} from './examples/3';
import {TuiHostedDropdownExample4} from './examples/4';
import {TuiHostedDropdownExample5} from './examples/5';
import {TopRightDirective} from './examples/5/accessor';
import {ExampleTuiHostedDropdownComponent} from './hosted-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        FormsModule,
        TuiHostedDropdownModule,
        TuiNotificationComponent,
        TuiTabsModule,
        TuiInputModule,
        TuiButtonDirective,
        TuiGroupDirective,
        TuiSvgComponent,
        TuiLinkDirective,
        TuiSelectModule,
        TuiActiveZoneDirective,
        TuiDropdownModule,
        TuiDataList,
        TuiDataListWrapperModule,
        DropdownDocumentationModule,
        TuiAddonDoc,
        TuiMultiSelectModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHostedDropdownComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        TuiHostedDropdownExample1,
        TuiHostedDropdownExample2,
        TuiHostedDropdownExample3,
        TuiHostedDropdownExample4,
        TuiHostedDropdownExample5,
        TopRightDirective,
        ExampleTuiHostedDropdownComponent,
    ],
    exports: [ExampleTuiHostedDropdownComponent],
})
export class ExampleTuiHostedDropdownModule {}
