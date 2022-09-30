import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCardModule, TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiAutoFocusModule, TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHintModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiMarkerIconModule,
    TuiMultiSelectModule,
    TuiRadioListModule,
    TuiSelectModule,
    TuiTextAreaModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiSelectExample1} from './examples/1';
import {TuiSelectExample2} from './examples/2';
import {TuiSelectExample3} from './examples/3';
import {TuiSelectExample4} from './examples/4';
import {TuiSelectExample5} from './examples/5';
import {TuiSelectExample6} from './examples/6';
import {TuiSelectExample7} from './examples/7';
import {TuiSelectExample8} from './examples/8';
import {TuiSelectExample9} from './examples/9';
import {ExampleMyAccountComponent} from './examples/9/account/my-account.component';
import {TuiSelectExample10} from './examples/10';
import {ExampleTuiSelectComponent} from './select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        ScrollingModule,
        TuiScrollbarModule,
        TuiDataListModule,
        TuiTextAreaModule,
        TuiSelectModule,
        TuiCardModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiMoneyModule,
        TuiAvatarModule,
        TuiSvgModule,
        TuiDropdownModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiAutoFocusModule,
        TuiLetModule,
        TuiLoaderModule,
        TuiDataListWrapperModule,
        TuiMultiSelectModule,
        TuiLabelModule,
        TuiNotificationModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiMarkerIconModule,
        TuiMapperPipeModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSelectComponent)),
    ],
    declarations: [
        ExampleTuiSelectComponent,
        ExampleMyAccountComponent,
        TuiSelectExample1,
        TuiSelectExample2,
        TuiSelectExample3,
        TuiSelectExample4,
        TuiSelectExample5,
        TuiSelectExample6,
        TuiSelectExample7,
        TuiSelectExample8,
        TuiSelectExample9,
        TuiSelectExample10,
    ],
    exports: [ExampleTuiSelectComponent],
})
export class ExampleTuiSelectModule {}
