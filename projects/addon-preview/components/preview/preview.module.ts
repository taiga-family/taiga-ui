import {NgModule} from '@angular/core';

import {TuiPreviewPaginationComponent} from './pagination/preview-pagination.component';
import {TuiPreviewComponent} from './preview.component';
import {TuiPreviewActionDirective} from './preview-action/preview-action.directive';
import {TuiPreviewTitleComponent} from './title/preview-title.component';
import {TuiPreviewZoomComponent} from './zoom/preview-zoom.component';

@NgModule({
    imports: [
        TuiPreviewComponent,
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
        TuiPreviewActionDirective,
        TuiPreviewZoomComponent,
    ],
    exports: [
        TuiPreviewComponent,
        TuiPreviewActionDirective,
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
        TuiPreviewZoomComponent,
    ],
})
export class TuiPreview {}
