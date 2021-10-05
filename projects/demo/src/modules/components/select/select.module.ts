import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCardModule, TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiAutoFocusModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiHintControllerModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule,
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
import {ExampleTuiSelectComponent} from './select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PolymorpheusModule,
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
        TuiDropdownControllerModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiAutoFocusModule,
        TuiLetModule,
        TuiLoaderModule,
        TuiDataListWrapperModule,
        TuiMultiSelectModule,
        TuiLabelModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiSelectComponent)),
    ],
    declarations: [
        ExampleTuiSelectComponent,
        TuiSelectExample1,
        TuiSelectExample2,
        TuiSelectExample3,
        TuiSelectExample4,
        TuiSelectExample5,
        TuiSelectExample6,
        TuiSelectExample7,
    ],
    exports: [ExampleTuiSelectComponent],
})
export class ExampleTuiSelectModule {}
