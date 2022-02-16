import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiHintModule} from '@taiga-ui/core';
import {TuiHintErrorPipeModule, TuiInputNumberModule} from '@taiga-ui/kit';

import {TuiHintErrorPipeExample1} from './examples/1';
import {ExampleTuiHintErrorPipeComponent} from './hint-error.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiHintErrorPipeModule,
        TuiTableModule,
        TuiHintModule,
        TuiInputNumberModule,
        TuiCurrencyPipeModule,
        RouterModule.forChild(generateRoutes(ExampleTuiHintErrorPipeComponent)),
    ],
    declarations: [ExampleTuiHintErrorPipeComponent, TuiHintErrorPipeExample1],
    exports: [ExampleTuiHintErrorPipeComponent],
})
export class ExampleTuiHintErrorModule {}
