import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiHintModule,
    TuiLinkDirective,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
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
        TuiSvgComponent,
        TuiButtonDirective,
        PolymorpheusModule,
        TuiHintModule,
        TuiRadioListComponent,
        TuiWrapperModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPrimitiveTextfieldComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldExample1,
        TuiPrimitiveTextfieldExample2,
    ],
    exports: [ExampleTuiPrimitiveTextfieldComponent],
})
export class ExampleTuiPrimitiveTextfieldModule {}
