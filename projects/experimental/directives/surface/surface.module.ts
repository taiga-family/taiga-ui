import {NgModule} from '@angular/core';

import {TuiSurfaceComponent} from './surface.component';
import {TuiSurfaceDirective} from './surface.directive';

@NgModule({
    declarations: [TuiSurfaceComponent, TuiSurfaceDirective],
    exports: [TuiSurfaceDirective],
})
export class TuiSurfaceModule {}
