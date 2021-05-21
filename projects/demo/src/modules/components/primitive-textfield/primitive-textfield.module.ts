import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiHintModule,
    TuiLabelModule,
    TuiLinkModule,
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
import {TuiPrimitiveTextfieldExample1} from './examples/1/component';
import {ExampleTuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InheritedDocumentationModule,
        HintControllerDocumentationModule,
        TextfieldControllerDocumentationModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
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
        RouterModule.forChild(generateRoutes(ExampleTuiPrimitiveTextfieldComponent)),
    ],
    declarations: [ExampleTuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldExample1],
    exports: [ExampleTuiPrimitiveTextfieldComponent],
})
export class ExampleTuiPrimitiveTextfieldModule {}
