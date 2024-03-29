import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';

import {TuiLegendItemComponent} from './legend-item.component';

@NgModule({
    imports: [CommonModule, TuiButtonDirective],
    declarations: [TuiLegendItemComponent],
    exports: [TuiLegendItemComponent],
})
export class TuiLegendItemModule {}
