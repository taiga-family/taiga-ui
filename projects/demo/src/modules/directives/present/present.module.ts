import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHoveredModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiBadgeModule, TuiPresentModule} from '@taiga-ui/kit';

import {TuiPresentExample1} from './examples/1';
import {ExampleTuiPresentComponent} from './present.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLetModule,
        TuiPresentModule,
        TuiHoveredModule,
        TuiBadgeModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPresentComponent)),
    ],
    declarations: [ExampleTuiPresentComponent, TuiPresentExample1],
    exports: [ExampleTuiPresentComponent],
})
export class ExampleTuiPresentModule {}
