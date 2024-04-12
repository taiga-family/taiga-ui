import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHoveredModule} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';

import {TuiHoveredChangeExample1} from './examples/1';
import {ExampleTuiHoveredChangeComponent} from './hovered-change.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHoveredModule,
        TuiAddonDocModule,
        TuiButtonDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHoveredChangeComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiHoveredChangeComponent, TuiHoveredChangeExample1],
    exports: [ExampleTuiHoveredChangeComponent],
})
export class ExampleTuiHoveredChangeModule {}
