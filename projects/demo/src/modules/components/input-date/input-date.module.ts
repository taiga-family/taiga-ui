import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiMobileCalendarDialogModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputDateModule,
    TuiRadioListModule,
    TuiUnfinishedValidatorModule,
} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateExample1} from './examples/1';
import {TuiInputDateExample2} from './examples/2';
import {TuiInputDateExample3} from './examples/3';
import {ExampleTuiInputDateComponent} from './input-date.component';

@NgModule({
    imports: [
        ...TUI_DOC_PAGE_MODULES,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiLinkModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiInputDateModule,
        TuiMobileCalendarDialogModule,
        TuiUnfinishedValidatorModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputDateComponent)),
    ],
    declarations: [
        ExampleTuiInputDateComponent,
        TuiInputDateExample1,
        TuiInputDateExample2,
        TuiInputDateExample3,
    ],
    exports: [ExampleTuiInputDateComponent],
})
export class ExampleTuiInputDateModule {}
