import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiThumbnailCardComponent} from './thumbnail-card.component';
import {TuiThumbnailCardDirective} from './thumbnail-card.directive';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiThumbnailCardComponent, TuiThumbnailCardDirective],
    exports: [TuiThumbnailCardComponent, TuiThumbnailCardDirective],
})
export class TuiThumbnailCardModule {}
