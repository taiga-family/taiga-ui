import {NgModule} from '@angular/core';

import {TuiAppearanceDirective} from './appearance.directive';

@NgModule({
    declarations: [TuiAppearanceDirective],
    exports: [TuiAppearanceDirective],
})
export class TuiAppearanceModule {}
