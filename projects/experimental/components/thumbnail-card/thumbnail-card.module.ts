import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIconModule} from '@taiga-ui/experimental/components/icon';

import {TuiThumbnailCardComponent} from './thumbnail-card.component';

@NgModule({
    imports: [CommonModule, TuiIconModule],
    declarations: [TuiThumbnailCardComponent],
    exports: [TuiThumbnailCardComponent],
})
export class TuiThumbnailCardModule {}
