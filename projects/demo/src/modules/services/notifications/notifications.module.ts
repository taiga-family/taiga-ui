import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiNotificationsExampleComponent1} from './examples/1';
import {TuiNotificationsExampleComponent2} from './examples/2';
import {TuiNotificationsExampleComponent3} from './examples/3';
import {AlertExampleComponent} from './examples/3/alert-example/alert-example.component';
import {AlertExampleModule} from './examples/3/alert-example/alert-example.module';
import {TuiNotificationsExampleComponent4} from './examples/4';
import {AlertExampleWithDataComponent} from './examples/4/alert-example-with-data/alert-example-with-data.component';
import {AlertExampleWithDataModule} from './examples/4/alert-example-with-data/alert-example-with-data.module';
import {TuiNotificationsExampleComponent5} from './examples/5';
import {AlertExampleWithCustomLabelComponent} from './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component';
import {AlertExampleWithCustomLabelModule} from './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module';
import {CustomLabelComponent} from './examples/5/custom-label/custom-label.component';
import {CustomLabelModule} from './examples/5/custom-label/custom-label.module';
import {ExampleTuiNotificationsComponent} from './notifications.component';

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
        RouterModule.forChild(generateRoutes(ExampleTuiNotificationsComponent)),
    ],
    declarations: [
        ExampleTuiNotificationsComponent,
        TuiNotificationsExampleComponent1,
        TuiNotificationsExampleComponent2,
        TuiNotificationsExampleComponent3,
        TuiNotificationsExampleComponent4,
        TuiNotificationsExampleComponent5,
    ],
    entryComponents: [
        AlertExampleComponent,
        AlertExampleWithDataComponent,
        AlertExampleWithCustomLabelComponent,
        CustomLabelComponent,
    ],
    exports: [ExampleTuiNotificationsComponent],
})
export class ExampleTuiNotificationsModule {}
