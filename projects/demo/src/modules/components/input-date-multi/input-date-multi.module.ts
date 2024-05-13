import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiAddonDocModule, tuiGetDocModules} from '@taiga-ui/addon-doc';
import {tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';
import {
    TuiDropdownModule,
    TuiHintModule,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateMultiModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateMultiExample1} from './examples/1';
import {ExampleTuiInputDateMultiComponent} from './input-date-multi.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkDirective,
        TuiHintModule,
        TuiDropdownModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        TuiInputDateMultiModule,
        TuiTextfieldControllerModule,
        InheritedDocumentationModule,
        tuiGetDocModules(ExampleTuiInputDateMultiComponent),
    ],
    declarations: [ExampleTuiInputDateMultiComponent, TuiInputDateMultiExample1],
    providers: [tuiProvideMobileCalendar()],
    exports: [ExampleTuiInputDateMultiComponent],
})
export class ExampleTuiInputDateMultiModule {}
