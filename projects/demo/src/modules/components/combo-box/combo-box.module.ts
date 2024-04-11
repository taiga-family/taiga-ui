import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHintModule,
    TuiInitialsPipe,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiScrollableDirective,
    TuiScrollbarComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiComboBoxComponent} from './combo-box.component';
import {TuiComboBoxExample1} from './examples/1';
import {TuiComboBoxExample2} from './examples/2';
import {TuiComboBoxExample3} from './examples/3';
import {TuiComboBoxExample4} from './examples/4';
import {TuiComboBoxExample5} from './examples/5';
import {IndexChangeDirective} from './examples/5/index-change.directive';
import {TuiComboBoxExample6} from './examples/6';
import {TuiComboBoxExample7} from './examples/7';
import {TuiComboBoxExample8} from './examples/8';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        TuiScrollbarComponent,
        TuiComboBoxModule,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiAvatarComponent,
        TuiSvgComponent,
        TuiDataListModule,
        TuiLoaderModule,
        TuiLetModule,
        TuiNotificationModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiDropdownModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiStringifyContentPipeModule,
        PolymorpheusModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiComboBoxComponent)),
        TuiTextCodeModule,
        TuiScrollableDirective,
        TuiInitialsPipe,
    ],
    declarations: [
        ExampleTuiComboBoxComponent,
        TuiComboBoxExample1,
        TuiComboBoxExample2,
        TuiComboBoxExample3,
        TuiComboBoxExample4,
        TuiComboBoxExample5,
        TuiComboBoxExample6,
        TuiComboBoxExample7,
        TuiComboBoxExample8,
        IndexChangeDirective,
    ],
    exports: [ExampleTuiComboBoxComponent],
})
export class ExampleTuiComboBoxModule {}
