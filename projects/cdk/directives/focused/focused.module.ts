import {NgModule} from '@angular/core';

import {TuiFocusedDirective} from './focused.directive';

@NgModule({
    declarations: [TuiFocusedDirective],
    exports: [TuiFocusedDirective],
})
export class TuiFocusedModule {}
