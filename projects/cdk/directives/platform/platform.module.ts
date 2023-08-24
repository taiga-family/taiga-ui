import {NgModule} from '@angular/core';

import {TuiPlatformDirective} from './platform.directive';

@NgModule({
    declarations: [TuiPlatformDirective],
    exports: [TuiPlatformDirective],
})
export class TuiPlatformModule {}
