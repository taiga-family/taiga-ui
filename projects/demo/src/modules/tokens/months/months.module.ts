import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {ExampleTuiMonthsComponent} from './months.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiMonthsComponent)),
    ],
    declarations: [ExampleTuiMonthsComponent],
    exports: [ExampleTuiMonthsComponent],
})
export class ExampleTuiMonthsModule {}
