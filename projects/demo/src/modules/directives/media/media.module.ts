import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHighDpiDirective, TuiMediaDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {TuiMediaExample1} from './examples/1';
import {TuiMediaExample2} from './examples/2';
import {TuiMediaExample3} from './examples/3';
import {ExampleTuiMediaComponent} from './media.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiMediaDirective,
        TuiHighDpiDirective,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiSliderModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMediaComponent)),
        TuiSetupComponent,
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
