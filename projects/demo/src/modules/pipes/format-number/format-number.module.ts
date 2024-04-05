import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiExamplePipe} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiFormatNumberPipeModule,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {NumberFormatDocumentationModule} from '../../components/abstract/number-format-documentation/number-format-documentation.module';
import {TuiFormatNumberExample1} from './examples/1';
import {ExampleTuiFormatNumberComponent} from './format-number.component';

@NgModule({
    imports: [
        TuiFormatNumberPipeModule,
        TuiExamplePipe,
        ReactiveFormsModule,
        CommonModule,
        TuiTextfieldControllerModule,
        TuiInputNumberModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFormatNumberComponent)),
        InheritedDocumentationModule,
        NumberFormatDocumentationModule,
        TuiLinkDirective,
    ],
    declarations: [ExampleTuiFormatNumberComponent, TuiFormatNumberExample1],
    exports: [ExampleTuiFormatNumberComponent],
})
export class ExampleTuiFormatNumberModule {}
