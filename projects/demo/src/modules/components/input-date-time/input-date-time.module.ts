import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiHintControllerModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputDateTimeModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateTimeExample1} from './examples/1';
import {TuiInputDateTimeExample2} from './examples/2';
import {ExampleTuiInputDateTimeComponent} from './input-date-time.component';

@NgModule({
    imports: [
        TuiAddonDocModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiInputDateTimeModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputDateTimeComponent)),
    ],
    declarations: [
        ExampleTuiInputDateTimeComponent,
        TuiInputDateTimeExample1,
        TuiInputDateTimeExample2,
    ],
    exports: [ExampleTuiInputDateTimeComponent],
})
export class ExampleTuiInputDateTimeModule {}
