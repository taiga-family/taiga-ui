import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiAlertHostModule} from '@taiga-ui/cdk';
import {
    TuiAlertModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiModeModule,
} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ExampleTuiAlertsComponent} from './alerts.component';
import {TuiAlertsExampleComponent1} from './examples/1';
import {TuiAlertsExampleComponent2} from './examples/2';
import {TuiAlertsExampleComponent3} from './examples/3';
import {AlertExampleModule} from './examples/3/alert-example/alert-example.module';
import {TuiAlertsExampleComponent4} from './examples/4';
import {AlertExampleWithDataModule} from './examples/4/alert-example-with-data/alert-example-with-data.module';
import {TuiAlertsExampleComponent5} from './examples/5';
import {AlertExampleWithCustomLabelModule} from './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module';
import {CustomLabelModule} from './examples/5/custom-label/custom-label.module';
import {TuiAlertsExampleComponent6} from './examples/6';
import {TuiAlertsExampleComponent7} from './examples/7';
import {TuiAlertsExampleComponent8} from './examples/8';
import {CustomAlertsQueueOverrideDirective} from './overrides/custom-alerts-queue-override.directive';
import {LimitOfAlertsOverrideDirective} from './overrides/limit-of-alerts-override.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiTextCodeModule,
        TuiAlertModule,
        TuiButtonModule,
        TuiModeModule,
        TuiMoneyModule,
        AlertExampleWithCustomLabelModule,
        AlertExampleWithDataModule,
        AlertExampleModule,
        CustomLabelModule,
        TuiRadioListModule,
        TuiInputModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAlertsComponent)),
        TuiAlertHostModule,
    ],
    declarations: [
        ExampleTuiAlertsComponent,
        LimitOfAlertsOverrideDirective,
        CustomAlertsQueueOverrideDirective,
        TuiAlertsExampleComponent1,
        TuiAlertsExampleComponent2,
        TuiAlertsExampleComponent3,
        TuiAlertsExampleComponent4,
        TuiAlertsExampleComponent5,
        TuiAlertsExampleComponent6,
        TuiAlertsExampleComponent7,
        TuiAlertsExampleComponent8,
    ],
    exports: [ExampleTuiAlertsComponent],
})
export class ExampleTuiAlertsModule {}
