import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label/alert-example-with-custom-label.component';
import {AlertExampleWithCustomLabelModule} from './alert-example-with-custom-label/alert-example-with-custom-label.module';
import {AlertExampleWithDataComponent} from './alert-example-with-data/alert-example-with-data.component';
import {AlertExampleWithDataModule} from './alert-example-with-data/alert-example-with-data.module';
import {AlertExampleComponent} from './alert-example/alert-example.component';
import {AlertExampleModule} from './alert-example/alert-example.module';
import {CustomLabelComponent} from './custom-label/custom-label.component';
import {CustomLabelModule} from './custom-label/custom-label.module';
import {TuiNotificationsExampleComponent1} from './examples/1';
import {TuiNotificationsExampleComponent2} from './examples/2';
import {TuiNotificationsExampleComponent3} from './examples/3';
import {TuiNotificationsExampleComponent4} from './examples/4';
import {TuiNotificationsExampleComponent5} from './examples/5';
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
