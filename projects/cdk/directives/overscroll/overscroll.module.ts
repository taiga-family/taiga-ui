import {NgModule} from '@angular/core';

import {TuiOverscrollDirective} from './overscroll.directive';

@NgModule({
    declarations: [TuiOverscrollDirective],
    exports: [TuiOverscrollDirective],
})
export class TuiOverscrollModule {}
