import {NgModule} from '@angular/core';

import {TuiItemDirective} from './item.directive';

@NgModule({
    declarations: [TuiItemDirective],
    exports: [TuiItemDirective],
})
export class TuiItemModule {}
