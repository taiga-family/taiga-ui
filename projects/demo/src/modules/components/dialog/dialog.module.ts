import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDialogModule,
    TuiHintModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiNumberFormatDirective,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAccordionModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiMarkerIconModule,
    TuiRadioListComponent,
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
import {TuiDialogExampleComponent8} from './examples/8';
import {TuiDialogExampleComponent9} from './examples/9';
import {PayExampleModalModule} from './examples/9/pay-modal/pay-modal.module';
import {TuiDialogExampleComponent10} from './examples/10';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        TuiDialogModule,
        TuiAccordionModule,
        TuiAmountPipe,
        TuiButtonModule,
        TuiRadioListComponent,
        TuiInputModule,
        TuiHintModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiNotificationModule,
        TuiElasticStickyModule,
        TuiAutoFocusDirective,
        TuiAddonDocModule,
        DialogExampleModule,
        SearchDialogExampleModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDialogComponent)),
        TuiSvgModule,
        TuiLoaderModule,
        TuiInputNumberModule,
        PayExampleModalModule,
        TuiTextfieldControllerModule,
        TuiTextCodeModule,
        TuiNumberFormatDirective,
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
        TuiDialogExampleComponent8,
        TuiDialogExampleComponent9,
        TuiDialogExampleComponent10,
    ],
    exports: [ExampleTuiDialogComponent],
})
export class ExampleTuiDialogModule {}
