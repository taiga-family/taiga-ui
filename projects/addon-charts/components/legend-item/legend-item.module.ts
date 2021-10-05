import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiLegendItemComponent} from './legend-item.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule],
    declarations: [TuiLegendItemComponent],
    exports: [TuiLegendItemComponent],
})
export class TuiLegendItemModule {}
