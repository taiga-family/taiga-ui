import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHighDpiModule, TuiMediaModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {TuiMediaExample1} from './examples/1';
import {TuiMediaExample2} from './examples/2';
import {TuiMediaExample3} from './examples/3';
import {ExampleTuiMediaComponent} from './media.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiMediaModule,
        TuiHighDpiModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiSliderModule,
        TuiModeModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMediaComponent)),
    ],
    declarations: [
        ExampleTuiMediaComponent,
        TuiMediaExample1,
        TuiMediaExample2,
        TuiMediaExample3,
    ],
    exports: [ExampleTuiMediaComponent],
})
export class ExampleTuiMediaModule {}
