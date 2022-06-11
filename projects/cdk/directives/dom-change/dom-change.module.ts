import {NgModule} from '@angular/core';

import {TuiDomChangeDirective} from './dom-change.directive';

@NgModule({
    declarations: [TuiDomChangeDirective],
    exports: [TuiDomChangeDirective],
})
export class TuiDomChangeModule {}
