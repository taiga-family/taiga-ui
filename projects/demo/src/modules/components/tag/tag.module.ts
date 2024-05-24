import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';
import {TuiRadioListComponent} from '@taiga-ui/kit';
import {TuiTagModule} from '@taiga-ui/legacy';

import {TuiTagExample1} from './examples/1';
import {TuiTagExample2} from './examples/2';
import {TuiTagExample3} from './examples/3';
import {TuiTagExample4} from './examples/4';
import {TuiTagExample5} from './examples/5';
import {TuiTagExample6} from './examples/6';
import {ExampleTuiTagComponent} from './tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiRadioListComponent,
        TuiTagModule,
        TuiSvgComponent,
        TuiRepeatTimesDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTagComponent)),
    ],
    declarations: [
        ExampleTuiTagComponent,
        TuiTagExample1,
        TuiTagExample2,
        TuiTagExample3,
        TuiTagExample4,
        TuiTagExample5,
        TuiTagExample6,
    ],
    exports: [ExampleTuiTagComponent],
})
export class ExampleTuiTagModule {}
