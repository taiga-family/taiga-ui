import {NgModule} from '@angular/core';

import {TuiActiveZoneDirective} from './active-zone.directive';

@NgModule({
    declarations: [TuiActiveZoneDirective],
    exports: [TuiActiveZoneDirective],
})
export class TuiActiveZoneModule {}
