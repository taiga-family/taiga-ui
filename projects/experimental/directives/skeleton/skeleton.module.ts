import {NgModule} from '@angular/core';

import {TuiSkeletonComponent} from './skeleton.component';
import {TuiSkeletonDirective} from './skeleton.directive';

@NgModule({
    declarations: [TuiSkeletonComponent, TuiSkeletonDirective],
    exports: [TuiSkeletonDirective],
})
export class TuiSkeletonModule {}
