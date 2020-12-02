import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorModule} from '@taiga-ui/core';
import {TuiBarComponent} from './bar.component';

@NgModule({
    imports: [CommonModule, TuiColorModule],
    declarations: [TuiBarComponent],
    exports: [TuiBarComponent],
})
export class TuiBarModule {}
