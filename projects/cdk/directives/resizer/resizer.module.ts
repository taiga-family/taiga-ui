import {NgModule} from '@angular/core';

import {TuiResizeableDirective} from './resizeable.directive';
import {TuiResizerDirective} from './resizer.directive';

@NgModule({
    declarations: [TuiResizeableDirective, TuiResizerDirective],
    exports: [TuiResizeableDirective, TuiResizerDirective],
})
export class TuiResizerModule {}
