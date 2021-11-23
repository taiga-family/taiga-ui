import {NgModule} from '@angular/core';

import {TuiFocusVisibleDirective} from './focus-visible.directive';

@NgModule({
    declarations: [TuiFocusVisibleDirective],
    exports: [TuiFocusVisibleDirective],
})
export class TuiFocusVisibleModule {}
