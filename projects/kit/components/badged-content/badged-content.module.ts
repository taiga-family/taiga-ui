import {NgModule} from '@angular/core';
import {ResizeObserverDirective} from '@ng-web-apis/resize-observer';

import {TuiBadgedContentComponent} from './badged-content.component';
import {TuiBadgedContentDirective} from './badged-content.directive';

@NgModule({
    imports: [ResizeObserverDirective],
    declarations: [TuiBadgedContentComponent, TuiBadgedContentDirective],
    exports: [TuiBadgedContentComponent, TuiBadgedContentDirective],
})
export class TuiBadgedContent {}
