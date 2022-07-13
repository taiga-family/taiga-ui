import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiGroupModule, TuiTooltipModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiRadioBlockModule, TuiRadioListModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiRadioBlockExample1} from './examples/1';
import {TuiRadioBlockExample2} from './examples/2';
import {TuiRadioBlockExample3} from './examples/3';
import {ExampleTuiRadioBlockComponent} from './radio-block.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiRadioBlockModule,
        ReactiveFormsModule,
        TuiAvatarModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiGroupModule,
        TuiTooltipModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRadioBlockComponent)),
    ],
    declarations: [
        TuiRadioBlockExample1,
        TuiRadioBlockExample2,
        TuiRadioBlockExample3,
        ExampleTuiRadioBlockComponent,
    ],
    exports: [ExampleTuiRadioBlockComponent],
})
export class ExampleTuiRadioBlockModule {}
