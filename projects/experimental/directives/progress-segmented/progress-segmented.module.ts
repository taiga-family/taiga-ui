import {NgModule} from '@angular/core';

import {TuiProgressSegmentedComponent} from './progress-segmented.component';
import {TuiProgressSegmentedDirective} from './progress-segmented.directive';

/**
 * TODO: Move to TuiProgressModule (from `@taiga-ui/kit`) in 4.0
 * TODO: delete the previous version of the same component
 */
@NgModule({
    declarations: [TuiProgressSegmentedComponent, TuiProgressSegmentedDirective],
    exports: [TuiProgressSegmentedDirective],
})
export class TuiProgressSegmentedModule {}
