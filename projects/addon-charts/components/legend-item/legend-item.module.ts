import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiColorModule} from '@taiga-ui/core';
import {TuiLegendItemComponent} from './legend-item.component';

@NgModule({
    imports: [CommonModule, TuiColorModule, TuiButtonModule],
    declarations: [TuiLegendItemComponent],
    exports: [TuiLegendItemComponent],
})
export class TuiLegendItemModule {}
