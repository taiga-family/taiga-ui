import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiErrorModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputTagModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputTagExample1} from './examples/1';
import {TuiInputTagExample2} from './examples/2';
import {TuiInputTagExample3} from './examples/3';
import {TuiInputTagExample4} from './examples/4';
import {TuiInputTagExample5} from './examples/5';
import {TuiInputTagExample6} from './examples/6';
import {TuiInputTagExample7} from './examples/7';
import {ExampleTuiInputTagComponent} from './input-tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InheritedDocumentationModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLinkModule,
        TuiInputTagModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiDropdownControllerModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputTagComponent)),
    ],
    declarations: [
        ExampleTuiInputTagComponent,
        TuiInputTagExample1,
        TuiInputTagExample2,
        TuiInputTagExample3,
        TuiInputTagExample4,
        TuiInputTagExample5,
        TuiInputTagExample6,
        TuiInputTagExample7,
    ],
    exports: [ExampleTuiInputTagComponent],
})
export class ExampleTuiInputTagModule {}
