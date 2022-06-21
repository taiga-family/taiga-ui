import {NgModule} from '@angular/core';

import {TuiPresentDirective} from './present.directive';
import {TuiPresentStylesComponent} from './present-styles.component';

@NgModule({
    declarations: [TuiPresentDirective, TuiPresentStylesComponent],
    exports: [TuiPresentDirective],
    entryComponents: [TuiPresentStylesComponent],
})
export class TuiPresentModule {}
