import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollControlsModule} from '@taiga-ui/core/components/scroll-controls';

import {TuiScrollRefDirective} from './scroll-ref.directive';
import {TuiScrollableDirective} from './scrollable.directive';
import {TuiScrollbarComponent} from './scrollbar.component';

@NgModule({
    imports: [CommonModule, TuiScrollControlsModule],
    declarations: [TuiScrollbarComponent, TuiScrollRefDirective, TuiScrollableDirective],
    exports: [TuiScrollbarComponent, TuiScrollRefDirective, TuiScrollableDirective],
})
export class TuiScrollbarModule {}
