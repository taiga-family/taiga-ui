import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ExampleTuiAlertsComponent} from './alerts.component';
import {TuiAlertsExampleComponent1} from './examples/1';
import {TuiAlertsExampleComponent2} from './examples/2';
import {TuiAlertsExampleComponent3} from './examples/3';
import {AlertExampleComponent} from './examples/3/alert-example/alert-example.component';
import {AlertExampleModule} from './examples/3/alert-example/alert-example.module';
import {TuiAlertsExampleComponent4} from './examples/4';
import {AlertExampleWithDataComponent} from './examples/4/alert-example-with-data/alert-example-with-data.component';
import {AlertExampleWithDataModule} from './examples/4/alert-example-with-data/alert-example-with-data.module';
import {TuiAlertsExampleComponent5} from './examples/5';
import {AlertExampleWithCustomLabelComponent} from './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component';
import {AlertExampleWithCustomLabelModule} from './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module';
import {CustomLabelComponent} from './examples/5/custom-label/custom-label.component';
import {CustomLabelModule} from './examples/5/custom-label/custom-label.module';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiModeModule,
        TuiMoneyModule,
        PolymorpheusModule,
        AlertExampleWithCustomLabelModule,
        AlertExampleWithDataModule,
        AlertExampleModule,
        CustomLabelModule,
        TuiRadioListModule,
        TuiInputModule,
        TuiLinkModule,
        FormsModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAlertsComponent)),
    ],
    declarations: [
        ExampleTuiAlertsComponent,
        TuiAlertsExampleComponent1,
        TuiAlertsExampleComponent2,
        TuiAlertsExampleComponent3,
        TuiAlertsExampleComponent4,
        TuiAlertsExampleComponent5,
    ],
    entryComponents: [
        AlertExampleComponent,
        AlertExampleWithDataComponent,
        AlertExampleWithCustomLabelComponent,
        CustomLabelComponent,
    ],
    exports: [ExampleTuiAlertsComponent],
})
export class ExampleTuiAlertsModule {}
