import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIconComponent} from '@taiga-ui/core/components/icon';

import {TuiLinkComponent} from './link.component';

@NgModule({
    imports: [CommonModule, TuiIconComponent],
    declarations: [TuiLinkComponent],
    exports: [TuiLinkComponent],
})
export class TuiLinkModule {}
