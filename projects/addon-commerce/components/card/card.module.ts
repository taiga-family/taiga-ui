import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiCardComponent} from './card.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiCardComponent],
    exports: [TuiCardComponent],
})
export class TuiCardModule {}
