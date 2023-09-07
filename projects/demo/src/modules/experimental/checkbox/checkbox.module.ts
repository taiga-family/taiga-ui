import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiCheckboxModule} from '@taiga-ui/experimental';

import {ExampleTuiCheckboxComponent} from './checkbox.component';
import {TuiCheckboxExample1} from './examples/1';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TuiCheckboxModule,
        TuiNotificationModule,
        TuiPlatformModule,
        tuiGetDocModules(ExampleTuiCheckboxComponent),
    ],
    declarations: [ExampleTuiCheckboxComponent, TuiCheckboxExample1],
    exports: [ExampleTuiCheckboxComponent],
})
export class ExampleTuiCheckboxModule {}
