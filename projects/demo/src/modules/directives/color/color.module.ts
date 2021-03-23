import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiColorModule} from '@taiga-ui/core';
import {ExampleTuiColorComponent} from './color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiColorModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiColorComponent)),
    ],
    declarations: [ExampleTuiColorComponent],
    exports: [ExampleTuiColorComponent],
})
export class ExampleTuiColorModule {}
