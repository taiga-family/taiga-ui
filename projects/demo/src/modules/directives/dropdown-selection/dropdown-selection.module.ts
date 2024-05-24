import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiInitialsPipe,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiTextareaModule} from '@taiga-ui/legacy';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownSelectionComponent} from './dropdown-selection.component';
import {TuiDropdownSelectionExample1} from './examples/1';
import {TuiDropdownSelectionExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiDropdownModule,
        TuiButtonDirective,
        TuiTextareaModule,
        TuiAvatarComponent,
        TuiDataList,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownSelectionComponent)),
        DropdownDocumentationModule,
        TuiInitialsPipe,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiDropdownSelectionComponent,
        TuiDropdownSelectionExample1,
        TuiDropdownSelectionExample2,
    ],
    exports: [ExampleTuiDropdownSelectionComponent],
})
export class ExampleTuiDropdownSelectionModule {}
