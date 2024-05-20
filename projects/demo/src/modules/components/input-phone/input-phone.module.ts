import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiHintModule,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiInputPhoneModule} from '@taiga-ui/kit';
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
        TuiLetDirective,
        TuiDataList,
        TuiButtonDirective,
        TuiSvgComponent,
        TuiAvatarComponent,
        TuiDropdownModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiInputPhoneModule,
        TuiLinkDirective,
        TuiNotificationComponent,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputPhoneComponent)),
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
