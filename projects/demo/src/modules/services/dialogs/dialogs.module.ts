import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLinkModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {
    TuiAccordionModule,
    TuiInputModule,
    TuiMarkerIconModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {DialogExampleComponent} from './dialog-example/dialog-example.component';
import {DialogExampleModule} from './dialog-example/dialog-example.module';
import {ExampleTuiDialogsComponent} from './dialogs.component';
import {TuiDialogExampleComponent1} from './examples/1';
import {TuiDialogExampleComponent2} from './examples/2';
import {TuiDialogExampleComponent3} from './examples/3';
import {TuiDialogExampleComponent4} from './examples/4';
import {TuiDialogExampleComponent5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAccordionModule,
        TuiButtonModule,
        TuiMoneyModule,
        PolymorpheusModule,
        TuiRadioListModule,
        TuiInputModule,
        TuiHintModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiPreventDefaultModule,
        TuiNotificationModule,
        DialogExampleModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDialogsComponent)),
    ],
    declarations: [
        ExampleTuiDialogsComponent,
        TuiDialogExampleComponent1,
        TuiDialogExampleComponent2,
        TuiDialogExampleComponent3,
        TuiDialogExampleComponent4,
        TuiDialogExampleComponent5,
    ],
    entryComponents: [DialogExampleComponent],
    exports: [ExampleTuiDialogsComponent],
})
export class ExampleTuiDialogsModule {}
