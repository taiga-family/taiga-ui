import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiInputCardModule, TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLetModule, TuiMapperPipeModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiGroupModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiModeModule, TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTableModeModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
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
import {TextMaskModule} from 'angular2-text-mask';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputExample1} from './examples/1/component';
import {TuiInputExample2} from './examples/2/component';
import {TuiInputExample3} from './examples/3/component';
import {TuiInputExample4} from './examples/4/component';
import {TuiInputExample5} from './examples/5/component';
import {TuiInputExample6} from './examples/6/component';
import {TuiInputExample7} from './examples/7/component';
import {TuiInputExample8} from './examples/8';
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
        TuiTableModeModule,
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
        TuiHintControllerModule,
        TuiDropdownControllerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        PolymorpheusModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiInputComponent)),
        TextMaskModule,
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
    ],
    exports: [ExampleTuiInputComponent],
})
export class ExampleTuiInputModule {}
