import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiHintModule,
    TuiLabelModule,
    TuiLinkDirective,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiRadioListComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {HintControllerDocumentationModule} from '../abstract/hint-controller-documentation/hint-controller-documentation.module';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TextfieldControllerDocumentationModule} from '../abstract/textfield-controller-documentation/textfield-controller-documentation.module';
import {TuiPrimitiveTextfieldExample1} from './examples/1';
import {TuiPrimitiveTextfieldExample2} from './examples/2';
import {ExampleTuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InheritedDocumentationModule,
        HintControllerDocumentationModule,
        TextfieldControllerDocumentationModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
        TuiAvatarComponent,
        TuiLinkDirective,
        TuiSvgModule,
        TuiButtonDirective,
        PolymorpheusModule,
        TuiHintModule,
        TuiRadioListComponent,
        TuiLabelModule,
        TuiWrapperModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPrimitiveTextfieldComponent)),
    ],
    declarations: [
        ExampleTuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldExample1,
        TuiPrimitiveTextfieldExample2,
    ],
    exports: [ExampleTuiPrimitiveTextfieldComponent],
})
export class ExampleTuiPrimitiveTextfieldModule {}
