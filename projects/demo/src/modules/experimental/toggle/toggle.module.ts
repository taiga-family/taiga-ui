import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiToggleModule} from '@taiga-ui/experimental';

import {TuiToggleExample1} from './examples/1';
import {ExampleTuiToggleComponent} from './toggle.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TuiToggleModule,
        TuiNotificationModule,
        TuiPlatformModule,
        tuiGetDocModules(ExampleTuiToggleComponent),
    ],
    declarations: [ExampleTuiToggleComponent, TuiToggleExample1],
    exports: [ExampleTuiToggleComponent],
})
export class ExampleTuiToggleModule {}
