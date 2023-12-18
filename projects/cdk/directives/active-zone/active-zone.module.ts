import {NgModule} from '@angular/core';

import {TuiActiveZoneDirective} from './active-zone.directive';

@NgModule({
    imports: [TuiActiveZoneDirective],
    exports: [TuiActiveZoneDirective],
})
export class TuiActiveZoneModule {}
