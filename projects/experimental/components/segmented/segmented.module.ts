import {NgModule} from '@angular/core';

import {TuiSegmentedComponent} from './segmented.component';
import {TuiSegmentedDirective} from './segmented.directive';

@NgModule({
    declarations: [TuiSegmentedComponent, TuiSegmentedDirective],
    exports: [TuiSegmentedComponent, TuiSegmentedDirective],
})
export class TuiSegmentedModule {}
