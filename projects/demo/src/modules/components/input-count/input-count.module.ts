import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiLabelModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputCountModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCountExample1} from './examples/1';
import {TuiInputCountExample2} from './examples/2';
import {ExampleTuiInputCountComponent} from './input-count.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputCountModule,
        TuiLabelModule,
        TuiLinkModule,
        TuiAddonDocModule,
        TuiTextfieldControllerModule,
        InheritedDocumentationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputCountComponent)),
    ],
    declarations: [
        ExampleTuiInputCountComponent,
        TuiInputCountExample1,
        TuiInputCountExample2,
    ],
    exports: [ExampleTuiInputCountComponent],
})
export class ExampleTuiInputCountModule {}
