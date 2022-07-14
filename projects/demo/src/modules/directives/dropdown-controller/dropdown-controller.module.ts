import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDropdownControllerModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/kit';

import {ExampleTuiDropdownControllerComponent} from './dropdown-controller.component';
import {TuiDropdownControllerExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiInputDateModule,
        TuiHostedDropdownModule,
        TuiDropdownControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownControllerComponent)),
    ],
    declarations: [ExampleTuiDropdownControllerComponent, TuiDropdownControllerExample1],
    exports: [ExampleTuiDropdownControllerComponent],
})
export class ExampleTuiDropdownControllerModule {}
