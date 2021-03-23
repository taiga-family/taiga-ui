import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDropdownControllerModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputTimeModule, TuiUnfinishedValidatorModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputTimeExample1} from './examples/1';
import {TuiInputTimeExample2} from './examples/2';
import {ExampleTuiInputTimeComponent} from './input-time.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputTimeModule,
        TuiLinkModule,
        InheritedDocumentationModule,
        TuiButtonModule,
        TuiDropdownControllerModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputTimeComponent)),
        TuiUnfinishedValidatorModule,
    ],
    declarations: [
        ExampleTuiInputTimeComponent,
        TuiInputTimeExample1,
        TuiInputTimeExample2,
    ],
    exports: [ExampleTuiInputTimeComponent],
})
export class ExampleTuiInputTimeModule {}
