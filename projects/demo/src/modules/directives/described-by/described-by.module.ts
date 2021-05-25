import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiDescribedByModule} from '@taiga-ui/core';
import {TuiTagModule} from '@taiga-ui/kit';
import {ExampleTuiDescribeByComponent} from './described-by.component';
import {TuiDescribedByExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiTagModule,
        TuiDescribedByModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDescribeByComponent)),
    ],
    declarations: [ExampleTuiDescribeByComponent, TuiDescribedByExample1],
    exports: [ExampleTuiDescribeByComponent],
})
export class ExampleTuiDescribedByModule {}
