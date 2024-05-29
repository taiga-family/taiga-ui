import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDropdownModule,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiSwitchComponent, TuiUnfinishedValidatorDirective} from '@taiga-ui/kit';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';
import {TuiInputTimeExample1} from './examples/1';
import {TuiInputTimeExample2} from './examples/2';
import {TuiInputTimeExample3} from './examples/3';
import {TuiInputTimeExample4} from './examples/4';
import {TuiInputTimeExample5} from './examples/5';
import {TuiInputTimeExample6} from './examples/6';
import {ExampleTuiInputTimeComponent} from './input-time.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputTimeModule,
        TuiLinkDirective,
        InheritedDocumentationComponent,
        TuiButtonDirective,
        TuiDropdownModule,
        TuiTextfieldControllerModule,
        TuiNotificationComponent,
        TuiHint,
        TuiSwitchComponent,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputTimeComponent)),
        TuiUnfinishedValidatorDirective,
    ],
    declarations: [
        ExampleTuiInputTimeComponent,
        TuiInputTimeExample1,
        TuiInputTimeExample2,
        TuiInputTimeExample3,
        TuiInputTimeExample4,
        TuiInputTimeExample5,
        TuiInputTimeExample6,
    ],
    exports: [ExampleTuiInputTimeComponent],
})
export class ExampleTuiInputTimeModule {}
