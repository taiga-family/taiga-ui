import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiHintControllerModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiScrollbarModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiMultiSelectExample1} from './examples/1';
import {TuiMultiSelectExample2} from './examples/2';
import {TuiMultiSelectExample3} from './examples/3';
import {TuiMultiSelectExample4} from './examples/4';
import {TuiMultiSelectExample5} from './examples/5';
import {TuiMultiSelectExample6} from './examples/6';
import {TuiMultiSelectExample7} from './examples/7';
import {TuiMultiSelectExample8} from './examples/8';
import {TuiMultiSelectExample9} from './examples/9';
import {ExampleTuiMultiSelectComponent} from './multi-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        TuiScrollbarModule,
        TuiMultiSelectModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiDropdownControllerModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiLabelModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMultiSelectComponent)),
        PolymorpheusModule,
    ],
    declarations: [
        ExampleTuiMultiSelectComponent,
        TuiMultiSelectExample1,
        TuiMultiSelectExample2,
        TuiMultiSelectExample3,
        TuiMultiSelectExample4,
        TuiMultiSelectExample5,
        TuiMultiSelectExample6,
        TuiMultiSelectExample7,
        TuiMultiSelectExample8,
        TuiMultiSelectExample9,
    ],
    exports: [ExampleTuiMultiSelectComponent],
})
export class ExampleTuiMultiSelectModule {}
