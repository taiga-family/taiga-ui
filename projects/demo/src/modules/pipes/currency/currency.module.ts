import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkDirective, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit';

import {ExampleTuiCurrencyComponent} from './currency.component';
import {TuiCurrencyExample1} from './examples/1/component';
import {TuiCurrencyExample2} from './examples/2/component';

@NgModule({
    imports: [
        TuiTextfieldControllerModule,
        TuiCurrencyPipeModule,
        TuiInputNumberModule,
        ReactiveFormsModule,
        FormsModule,
        TuiLinkDirective,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCurrencyComponent)),
    ],
    declarations: [ExampleTuiCurrencyComponent, TuiCurrencyExample2, TuiCurrencyExample1],
    exports: [ExampleTuiCurrencyComponent],
})
export class ExampleTuiCurrencyModule {}
