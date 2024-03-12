import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIconComponent} from '@taiga-ui/core';

import {TuiThumbnailCardComponent} from './thumbnail-card.component';

@NgModule({
    imports: [CommonModule, TuiIconComponent],
    declarations: [TuiThumbnailCardComponent],
    exports: [TuiThumbnailCardComponent],
})
export class TuiThumbnailCardModule {}
