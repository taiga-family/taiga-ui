import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiSvgModule} from '@taiga-ui/core';
import {ExampleTuiSvgComponent} from './svg.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiSvgComponent)),
    ],
    declarations: [ExampleTuiSvgComponent],
    exports: [ExampleTuiSvgComponent],
})
export class ExampleTuiSvgModule {}
