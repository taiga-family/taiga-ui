import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAmountPipe, TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiAutoFocusDirective, TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHintModule,
    TuiInitialsPipe,
    TuiLabelModule,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiNumberFormatDirective,
    TuiScrollableDirective,
    TuiScrollbarComponent,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiDataListWrapperModule,
    TuiMarkerIconModule,
    TuiMultiSelectModule,
    TuiRadioListComponent,
    TuiSelectModule,
    TuiTextareaModule,
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
import {TuiSelectExample11} from './examples/11';
import {ExampleTuiSelectComponent} from './select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        ScrollingModule,
        TuiScrollbarComponent,
        TuiDataListModule,
        TuiTextareaModule,
        TuiSelectModule,
        TuiThumbnailCardComponent,
        TuiRadioListComponent,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiAvatarComponent,
        TuiSvgModule,
        TuiDropdownModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiAutoFocusDirective,
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
        TuiAmountPipe,
        TuiNumberFormatDirective,
        TuiScrollableDirective,
        TuiInitialsPipe,
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
        TuiSelectExample11,
    ],
    exports: [ExampleTuiSelectComponent],
})
export class ExampleTuiSelectModule {}
