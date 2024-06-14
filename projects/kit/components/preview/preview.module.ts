import {AsyncPipe, NgIf, PercentPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverDirective} from '@ng-web-apis/mutation-observer';
import {ResizeObserverDirective} from '@ng-web-apis/resize-observer';
import {TuiPan, TuiZoom} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit/components/slider';

import {TuiPreviewPagination} from './pagination/preview-pagination.component';
import {TuiPreviewComponent} from './preview.component';
import {TuiPreviewAction} from './preview-action/preview-action.directive';
import {TuiPreviewTitle} from './title/preview-title.component';
import {TuiPreviewZoom} from './zoom/preview-zoom.component';

@NgModule({
    imports: [
        NgIf,
        AsyncPipe,
        TuiPan,
        TuiZoom,
        MutationObserverDirective,
        ResizeObserverDirective,
        TuiButton,
        FormsModule,
        TuiSlider,
        PercentPipe,
        ...TuiHint,
    ],
    declarations: [
        TuiPreviewComponent,
        TuiPreviewTitle,
        TuiPreviewPagination,
        TuiPreviewAction,
        TuiPreviewZoom,
    ],
    exports: [
        TuiPreviewComponent,
        TuiPreviewAction,
        TuiPreviewTitle,
        TuiPreviewPagination,
        TuiPreviewZoom,
        ...TuiHint,
    ],
})
export class TuiPreview {}
