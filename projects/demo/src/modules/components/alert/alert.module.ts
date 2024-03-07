import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {
    TuiAlertModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiModeModule,
} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ExampleTuiAlertComponent} from './alert.component';
import {TuiAlertExampleComponent1} from './examples/1';
import {TuiAlertExampleComponent2} from './examples/2';
import {TuiAlertExampleComponent3} from './examples/3';
import {TuiAlertExampleComponent4} from './examples/4';
import {TuiAlertExampleComponent5} from './examples/5';
import {TuiAlertExampleComponent6} from './examples/6';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiTextCodeModule,
        TuiAlertModule,
        TuiButtonModule,
        TuiModeModule,
        TuiAmountPipe,
        TuiRadioListModule,
        TuiInputModule,
        TuiLinkModule,
        TuiAddonDocModule,
        TuiAlertExampleComponent1,
        TuiAlertExampleComponent2,
        TuiAlertExampleComponent3,
        TuiAlertExampleComponent4,
        TuiAlertExampleComponent5,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAlertComponent)),
    ],
    declarations: [ExampleTuiAlertComponent, TuiAlertExampleComponent6],
    exports: [ExampleTuiAlertComponent],
})
export class ExampleTuiAlertModule {}
