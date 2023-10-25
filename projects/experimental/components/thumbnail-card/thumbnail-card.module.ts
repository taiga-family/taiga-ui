import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiThumbnailCardComponent} from './thumbnail-card.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiThumbnailCardComponent],
    exports: [TuiThumbnailCardComponent],
})
export class TuiThumbnailCardModule {}
