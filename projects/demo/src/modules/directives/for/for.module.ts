import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiForModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLoaderModule} from '@taiga-ui/core';

import {TuiForExample1} from './examples/1';
import {ExampleTuiForComponent} from './for.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiLoaderModule,
        TuiForModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiForComponent)),
    ],
    declarations: [ExampleTuiForComponent, TuiForExample1],
    exports: [ExampleTuiForComponent],
})
export class ExampleTuiForModule {}
