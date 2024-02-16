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
import {AlertExampleModule} from './examples/3/alert-example/alert-example.module';
import {TuiAlertExampleComponent4} from './examples/4';
import {AlertExampleWithDataModule} from './examples/4/alert-example-with-data/alert-example-with-data.module';
import {TuiAlertExampleComponent5} from './examples/5';
import {AlertExampleWithCustomLabelModule} from './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module';
import {CustomLabelModule} from './examples/5/custom-label/custom-label.module';
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
        AlertExampleWithCustomLabelModule,
        AlertExampleWithDataModule,
        AlertExampleModule,
        CustomLabelModule,
        TuiRadioListModule,
        TuiInputModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAlertComponent)),
    ],
    declarations: [
        ExampleTuiAlertComponent,
        TuiAlertExampleComponent1,
        TuiAlertExampleComponent2,
        TuiAlertExampleComponent3,
        TuiAlertExampleComponent4,
        TuiAlertExampleComponent5,
        TuiAlertExampleComponent6,
    ],
    exports: [ExampleTuiAlertComponent],
})
export class ExampleTuiAlertModule {}
