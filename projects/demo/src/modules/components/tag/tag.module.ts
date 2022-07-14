import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiForModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiModeModule, TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiRadioListModule, TuiTagModule} from '@taiga-ui/kit';

import {TuiTagExample1} from './examples/1';
import {TuiTagExample2} from './examples/2';
import {TuiTagExample3} from './examples/3';
import {TuiTagExample4} from './examples/4';
import {TuiTagExample5} from './examples/5';
import {ExampleTuiTagComponent} from './tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiRadioListModule,
        TuiTagModule,
        TuiModeModule,
        TuiSvgModule,
        TuiRepeatTimesModule,
        TuiAddonDocModule,
        TuiForModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTagComponent)),
    ],
    declarations: [
        ExampleTuiTagComponent,
        TuiTagExample1,
        TuiTagExample2,
        TuiTagExample3,
        TuiTagExample4,
        TuiTagExample5,
    ],
    exports: [ExampleTuiTagComponent],
})
export class ExampleTuiTagModule {}
