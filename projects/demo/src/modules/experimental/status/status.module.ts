import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiBadgeModule, TuiStatusModule} from '@taiga-ui/experimental';

import {TuiStatusExample1} from './examples/1';
import {ExampleTuiStatusComponent} from './status.component';

@NgModule({
    imports: [
        TuiStatusModule,
        TuiBadgeModule,
        tuiGetDocModules(ExampleTuiStatusComponent),
    ],
    declarations: [ExampleTuiStatusComponent, TuiStatusExample1],
    exports: [ExampleTuiStatusComponent],
})
export class ExampleTuiStatusModule {}
