import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollControlsComponent} from '@taiga-ui/core/components/scroll-controls';

import {TuiScrollableDirective} from './scrollable.directive';
import {TuiScrollbarComponent} from './scrollbar.component';

@NgModule({
    imports: [CommonModule, TuiScrollControlsComponent],
    declarations: [TuiScrollbarComponent, TuiScrollableDirective],
    exports: [TuiScrollbarComponent, TuiScrollableDirective],
})
export class TuiScrollbarModule {}
