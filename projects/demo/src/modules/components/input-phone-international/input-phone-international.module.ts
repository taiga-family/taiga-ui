import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDropdownModule,
    TuiHint,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputPhoneInternationalComponent,
    TuiSortCountriesPipeModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputPhoneExample1} from './examples/1';
import {TuiInputPhoneExample2} from './examples/2';
import {ExampleTuiInputPhoneInternationalComponent} from './input-phone-international.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputPhoneInternationalComponent,
        InheritedDocumentationModule,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiHint,
        TuiAddonDoc,
        TuiButtonDirective,
        TuiSortCountriesPipeModule,
        TuiNotificationComponent,
        RouterModule.forChild(
            tuiGenerateRoutes(ExampleTuiInputPhoneInternationalComponent),
        ),
    ],
    declarations: [
        ExampleTuiInputPhoneInternationalComponent,
        TuiInputPhoneExample1,
        TuiInputPhoneExample2,
    ],
    exports: [ExampleTuiInputPhoneInternationalComponent],
})
export class ExampleTuiInputPhoneInternationalModule {}
