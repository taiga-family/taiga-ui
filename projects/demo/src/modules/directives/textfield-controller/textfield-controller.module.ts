import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiHint,
    TuiLinkDirective,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {TextfieldControllerDocumentationModule} from '../../components/abstract/textfield-controller-documentation/textfield-controller-documentation.module';
import {TuiTextfieldControllerExample1} from './examples/1';
import {ExampleTuiTextfieldControllerComponent} from './textfield-controller.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiLinkDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiAddonDoc,
        TuiHint,
        TuiInputModule,
        TextfieldControllerDocumentationModule,
        FormsModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTextfieldControllerComponent)),
    ],
    declarations: [
        ExampleTuiTextfieldControllerComponent,
        TuiTextfieldControllerExample1,
    ],
    exports: [ExampleTuiTextfieldControllerComponent],
})
export class ExampleTuiTextfieldControllerModule {}
