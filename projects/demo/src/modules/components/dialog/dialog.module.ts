import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiAutoFocusModule, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDialogModule,
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

import {ExampleTuiDialogComponent} from './dialog.component';
import {TuiDialogExampleComponent1} from './examples/1';
import {TuiDialogExampleComponent2} from './examples/2';
import {DialogExampleModule} from './examples/2/dialog-example/dialog-example.module';
import {TuiDialogExampleComponent3} from './examples/3';
import {TuiDialogExampleComponent4} from './examples/4';
import {TuiDialogExampleComponent5} from './examples/5';
import {TuiDialogExampleComponent6} from './examples/6';
import {TuiDialogExampleComponent7} from './examples/7';
import {SearchDialogExampleModule} from './examples/7/search-example/search-dialog.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        TuiDialogModule,
        TuiAccordionModule,
        TuiButtonModule,
        TuiMoneyModule,
        TuiRadioListModule,
        TuiInputModule,
        TuiHintModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiPreventDefaultModule,
        TuiNotificationModule,
        TuiElasticStickyModule,
        TuiAutoFocusModule,
        TuiAddonDocModule,
        DialogExampleModule,
        SearchDialogExampleModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDialogComponent)),
    ],
    declarations: [
        ExampleTuiDialogComponent,
        TuiDialogExampleComponent1,
        TuiDialogExampleComponent2,
        TuiDialogExampleComponent3,
        TuiDialogExampleComponent4,
        TuiDialogExampleComponent5,
        TuiDialogExampleComponent6,
        TuiDialogExampleComponent7,
    ],
    exports: [ExampleTuiDialogComponent],
})
export class ExampleTuiDialogModule {}
