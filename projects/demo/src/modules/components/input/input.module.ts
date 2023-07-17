import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaskitoModule} from '@maskito/angular';
import {TuiInputCardModule, TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiLetModule, TuiMapperPipeModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupModule,
    TuiHintModule,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TextMaskModule,
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiRadioListModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputExample1} from './examples/1';
import {TuiInputExample2} from './examples/2';
import {TuiInputExample3} from './examples/3';
import {TuiInputExample4} from './examples/4';
import {TuiInputExample5} from './examples/5';
import {TuiInputExample6} from './examples/6';
import {TuiInputExample7} from './examples/7';
import {TuiInputExample8} from './examples/8';
import {TuiInputExample9} from './examples/9';
import {TuiInputExample10} from './examples/10';
import {ExampleTuiInputComponent} from './input.component';

@NgModule({
    imports: [
        RouterModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiInputCountModule,
        TuiSelectModule,
        TuiGroupModule,
        TuiMapperPipeModule,
        TuiMoneyModule,
        TuiLinkModule,
        TuiModeModule,
        TuiTableModule,
        TuiInputDateModule,
        TuiNotificationModule,
        TuiRepeatTimesModule,
        TuiSvgModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiInputCardModule,
        TuiAvatarModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiDropdownModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        PolymorpheusModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputComponent)),
        TextMaskModule,
        TuiTextCodeModule,
        MaskitoModule,
    ],
    declarations: [
        ExampleTuiInputComponent,
        TuiInputExample1,
        TuiInputExample2,
        TuiInputExample3,
        TuiInputExample4,
        TuiInputExample5,
        TuiInputExample6,
        TuiInputExample7,
        TuiInputExample8,
        TuiInputExample9,
        TuiInputExample10,
    ],
    exports: [ExampleTuiInputComponent],
})
export class ExampleTuiInputModule {}
