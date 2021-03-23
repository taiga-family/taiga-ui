import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiRadioListModule} from '@taiga-ui/kit';
import {TuiMoneyExample1} from './examples/1';
import {TuiMoneyExample2} from './examples/2';
import {TuiMoneyExample3} from './examples/3';
import {TuiMoneyExample4} from './examples/4';
import {ExampleTuiMoneyComponent} from './money.component';

@NgModule({
    imports: [
        TuiMoneyModule,
        TuiRadioListModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiMoneyComponent)),
    ],
    declarations: [
        ExampleTuiMoneyComponent,
        TuiMoneyExample1,
        TuiMoneyExample2,
        TuiMoneyExample3,
        TuiMoneyExample4,
    ],
    exports: [ExampleTuiMoneyComponent],
})
export class ExampleTuiMoneyModule {}
