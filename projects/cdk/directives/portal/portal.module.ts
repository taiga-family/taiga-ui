import {NgModule} from '@angular/core';

import {TuiPortalDirective} from './portal.directive';

@NgModule({
    declarations: [TuiPortalDirective],
    exports: [TuiPortalDirective],
})
export class TuiPortalModule {}
