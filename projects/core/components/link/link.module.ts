import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';

import {TuiLinkComponent} from './link.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiLinkComponent],
    exports: [TuiLinkComponent],
})
export class TuiLinkModule {}
