import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputCopyModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCopyExample1} from './examples/1';
import {ExampleTuiInputCopyComponent} from './input-copy.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiInputCopyModule,
        InheritedDocumentationModule,
        PolymorpheusModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputCopyComponent)),
    ],
    declarations: [ExampleTuiInputCopyComponent, TuiInputCopyExample1],
    exports: [ExampleTuiInputCopyComponent],
})
export class ExampleTuiInputCopyModule {}
