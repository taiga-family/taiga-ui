import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiMultiSelectExample1} from './examples/1';
import {TuiMultiSelectExample2} from './examples/2';
import {TuiMultiSelectExample3} from './examples/3';
import {TuiMultiSelectExample4} from './examples/4';
import {TuiMultiSelectExample5} from './examples/5';
import {ExampleTuiMultiSelectComponent} from './multi-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiMultiSelectModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiDropdownControllerModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiMultiSelectComponent)),
        PolymorpheusModule,
    ],
    declarations: [
        ExampleTuiMultiSelectComponent,
        TuiMultiSelectExample1,
        TuiMultiSelectExample2,
        TuiMultiSelectExample3,
        TuiMultiSelectExample4,
        TuiMultiSelectExample5,
    ],
    exports: [ExampleTuiMultiSelectComponent],
})
export class ExampleTuiMultiSelectModule {}
