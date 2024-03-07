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
    TuiDropdownModule,
    TuiHintModule,
    TuiInitialsPipe,
    TuiLabelModule,
    TuiLinkModule,
    TuiScrollableDirective,
    TuiScrollbarComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    TuiRadioListModule,
    TuiTagModule,
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
import {TuiMultiSelectExample10} from './examples/10';
import {TuiMultiSelectExample11} from './examples/11';
import {ExampleTuiMultiSelectComponent} from './multi-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        TuiScrollbarComponent,
        TuiMultiSelectModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiAvatarComponent,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiDropdownModule,
        TuiHintModule,
        TuiTagModule,
        TuiTextfieldControllerModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiLabelModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMultiSelectComponent)),
        PolymorpheusModule,
        TuiScrollableDirective,
        TuiInitialsPipe,
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
        TuiMultiSelectExample10,
        TuiMultiSelectExample11,
    ],
    exports: [ExampleTuiMultiSelectComponent],
})
export class ExampleTuiMultiSelectModule {}
