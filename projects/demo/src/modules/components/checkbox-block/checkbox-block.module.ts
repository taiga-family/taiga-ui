import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiGroupModule, TuiTooltipModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiCheckboxBlockModule, TuiRadioListModule} from '@taiga-ui/kit';
import {MarkdownModule} from 'ngx-markdown';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiCheckboxBlockComponent} from './checkbox-block.component';
import {TuiCheckboxBlockExample1} from './examples/1';
import {TuiCheckboxBlockExample2} from './examples/2';
import {TuiCheckboxBlockExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiCheckboxBlockModule,
        TuiGroupModule,
        MarkdownModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        CommonModule,
        TuiAvatarModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiTooltipModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCheckboxBlockComponent)),
    ],
    declarations: [
        TuiCheckboxBlockExample1,
        TuiCheckboxBlockExample2,
        TuiCheckboxBlockExample3,
        ExampleTuiCheckboxBlockComponent,
    ],
    exports: [ExampleTuiCheckboxBlockComponent],
})
export class ExampleTuiCheckboxBlockModule {}
