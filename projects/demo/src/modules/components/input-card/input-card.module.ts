import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiInputCardModule,
    TuiInputCVCModule,
    TuiInputExpireModule,
} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiErrorModule,
    TuiGroupModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAccordionModule, TuiFieldErrorPipeModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCardExample1} from './examples/1';
import {ExampleTuiInputCardComponent} from './input-card.component';

@NgModule({
    imports: [
        TuiInputCardModule,
        TuiInputCVCModule,
        TuiInputExpireModule,
        TuiGroupModule,
        TuiLinkModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiAccordionModule,
        CommonModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputCardComponent)),
    ],
    declarations: [ExampleTuiInputCardComponent, TuiInputCardExample1],
    exports: [ExampleTuiInputCardComponent],
})
export class ExampleTuiInputCardModule {}
