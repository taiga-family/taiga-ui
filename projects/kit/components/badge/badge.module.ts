import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorModule} from '@taiga-ui/core';
import {TuiBadgeComponent} from './badge.component';

@NgModule({
    imports: [CommonModule, TuiColorModule],
    declarations: [TuiBadgeComponent],
    exports: [TuiBadgeComponent],
})
export class TuiBadgeModule {}
