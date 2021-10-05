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
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAvatarModule, TuiInputPhoneModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputPhoneExample1} from './examples/1';
import {TuiInputPhoneExample2} from './examples/2';
import {TuiInputPhoneExample3} from './examples/3';
import {ExampleTuiInputPhoneComponent} from './input-phone.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        TuiLetModule,
        TuiDataListModule,
        TuiButtonModule,
        TuiSvgModule,
        TuiAvatarModule,
        TuiDropdownControllerModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiInputPhoneModule,
        TuiLinkModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputPhoneComponent)),
    ],
    declarations: [
        ExampleTuiInputPhoneComponent,
        TuiInputPhoneExample1,
        TuiInputPhoneExample2,
        TuiInputPhoneExample3,
    ],
    exports: [ExampleTuiInputPhoneComponent],
})
export class ExampleTuiInputPhoneModule {}
