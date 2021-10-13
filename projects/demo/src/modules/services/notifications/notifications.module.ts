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
import {AlertExampleModule} from './examples/3/alert-example/alert-example.module';
import {TuiNotificationsExampleComponent4} from './examples/4';
import {AlertExampleWithDataModule} from './examples/4/alert-example-with-data/alert-example-with-data.module';
import {ExampleTuiNotificationsComponent} from './notifications.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiModeModule,
        TuiMoneyModule,
        PolymorpheusModule,
        AlertExampleWithDataModule,
        AlertExampleModule,
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
    ],
    exports: [ExampleTuiNotificationsComponent],
})
export class ExampleTuiNotificationsModule {}
