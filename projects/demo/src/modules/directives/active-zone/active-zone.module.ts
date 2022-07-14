import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {ExampleTuiActiveZoneComponent} from './active-zone.component';
import {TuiActiveZoneExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiInputModule,
        TuiButtonModule,
        TuiActiveZoneModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiActiveZoneComponent)),
    ],
    declarations: [ExampleTuiActiveZoneComponent, TuiActiveZoneExample1],
    exports: [ExampleTuiActiveZoneComponent],
})
export class ExampleTuiActiveZoneModule {}
