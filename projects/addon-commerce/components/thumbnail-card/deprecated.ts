import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiThumbnailCardComponent} from './thumbnail-card.component';

/**
 * @deprecated use {@link TuiThumbnailCardComponent}
 */
@Component({
    selector: `tui-card`,
    templateUrl: `./thumbnail-card.template.html`,
    styleUrls: [`./thumbnail-card.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCardComponent extends TuiThumbnailCardComponent {}

/**
 * @deprecated use {@link TuiThumbnailCardModule}
 */
@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiCardComponent],
    exports: [TuiCardComponent],
})
export class TuiCardModule {}
