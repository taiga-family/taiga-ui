import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiGrid1} from './examples/1';
import {TuiGrid2} from './examples/2';
import {GridComponent} from './grid.component';

@NgModule({
    imports: [
        CommonModule,
        StylesInfoModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(GridComponent)),
    ],
    declarations: [GridComponent, TuiGrid1, TuiGrid2],
    exports: [GridComponent],
})
export class GridModule {}
