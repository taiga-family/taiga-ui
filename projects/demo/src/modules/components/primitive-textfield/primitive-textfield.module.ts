import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAvatarModule, TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiCustomizationModule} from '../../app/customization/customization.module';
import {ThemesModule} from '../../themes/themes.module';
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
        TuiAvatarModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiButtonModule,
        PolymorpheusModule,
        TuiHintModule,
        TuiRadioListModule,
        TuiCustomizationModule,
        TuiLabelModule,
        ThemesModule,
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
