import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiFieldErrorModule, TuiRadioListModule, TuiTextAreaModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiTextAreaExample1} from './examples/1';
import {TuiTextAreaExample2} from './examples/2';
import {TuiTextAreaExample3} from './examples/3';
import {TuiTextAreaExample4} from './examples/4';
import {TuiTextAreaExample5} from './examples/5';
import {ExampleTuiTextAreaComponent} from './text-area.component';

@NgModule({
    imports: [
        TuiTextAreaModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        TuiSvgModule,
        CommonModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiLabelModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiFieldErrorModule,
        RouterModule.forChild(generateRoutes(ExampleTuiTextAreaComponent)),
    ],
    declarations: [
        ExampleTuiTextAreaComponent,
        TuiTextAreaExample1,
        TuiTextAreaExample2,
        TuiTextAreaExample3,
        TuiTextAreaExample4,
        TuiTextAreaExample5,
    ],
    exports: [ExampleTuiTextAreaComponent],
})
export class ExampleTuiTextAreaModule {}
