import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiFormatDatePipeModule} from '@taiga-ui/core';

import {TuiFormatDateExample1} from './examples/1';
import {ExampleTuiFormatDateComponent} from './format-date.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiFormatDatePipeModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFormatDateComponent)),
    ],
    declarations: [ExampleTuiFormatDateComponent, TuiFormatDateExample1],
    exports: [ExampleTuiFormatDateComponent],
})
export class ExampleTuiFormatDateModule {}
