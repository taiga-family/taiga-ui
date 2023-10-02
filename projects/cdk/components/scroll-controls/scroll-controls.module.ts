import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiScrollControlsComponent} from './scroll-controls.component';
import {TuiScrollRefDirective} from './scroll-ref.directive';
import {TuiScrollbarDirective} from './scrollbar.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TuiScrollbarDirective,
        TuiScrollControlsComponent,
        TuiScrollRefDirective,
    ],
    exports: [TuiScrollControlsComponent, TuiScrollRefDirective],
})
export class TuiScrollControlsModule {}
