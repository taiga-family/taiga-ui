import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiModeModule} from '@taiga-ui/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiRadioListModule, TuiTagModule} from '@taiga-ui/kit';
import {TuiTagExample1} from './examples/1';
import {TuiTagExample2} from './examples/2';
import {TuiTagExample3} from './examples/3';
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
        RouterModule.forChild(generateRoutes(ExampleTuiTagComponent)),
    ],
    declarations: [
        ExampleTuiTagComponent,
        TuiTagExample1,
        TuiTagExample2,
        TuiTagExample3,
    ],
    exports: [ExampleTuiTagComponent],
})
export class ExampleTuiTagModule {}
