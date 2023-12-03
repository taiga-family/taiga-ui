import {NgModule} from '@angular/core';

import {TuiHighlightComponent} from './highlight.component';
import {TuiHighlightDirective} from './highlight.directive';

@NgModule({
    declarations: [TuiHighlightDirective, TuiHighlightComponent],
    exports: [TuiHighlightDirective],
})
export class TuiHighlightModule {}
