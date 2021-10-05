import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiBarModule} from '@taiga-ui/addon-charts/components/bar';
import {TuiBarSetComponent} from './bar-set.component';

@NgModule({
    imports: [CommonModule, TuiBarModule],
    declarations: [TuiBarSetComponent],
    exports: [TuiBarSetComponent],
})
export class TuiBarSetModule {}
