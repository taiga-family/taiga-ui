import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiCopyProcessorModule} from '@taiga-ui/cdk/directives/copy-processor';
import {TuiInputNumberModule} from '@taiga-ui/kit';

import {ExampleTuiCopyProcessorComponent} from './copy-processor.component';
import {TuiCopyProcessorExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputNumberModule,
        TuiCopyProcessorModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiCopyProcessorComponent)),
    ],
    declarations: [ExampleTuiCopyProcessorComponent, TuiCopyProcessorExample1],
    exports: [ExampleTuiCopyProcessorComponent],
})
export class ExampleTuiCopyProcessorModule {}
