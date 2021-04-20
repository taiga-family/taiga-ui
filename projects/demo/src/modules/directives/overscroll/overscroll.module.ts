import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiOverscrollModule} from '@taiga-ui/cdk';
import {TuiOverscrollExample1} from './examples/1';
import {TuiOverscrollExample2} from './examples/2';
import {ExampleTuiOverscrollComponent} from './overscroll.component';

@NgModule({
    imports: [
        CommonModule,
        TuiOverscrollModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiOverscrollComponent)),
    ],
    declarations: [
        ExampleTuiOverscrollComponent,
        TuiOverscrollExample1,
        TuiOverscrollExample2,
    ],
    exports: [ExampleTuiOverscrollComponent],
})
export class ExampleTuiOverscrollModule {}
