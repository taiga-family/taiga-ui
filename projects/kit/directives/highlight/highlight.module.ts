import {NgModule} from '@angular/core';

import {TuiHighlightDirective} from './highlight.directive';

@NgModule({
    declarations: [TuiHighlightDirective],
    exports: [TuiHighlightDirective],
})
export class TuiHighlightModule {}
