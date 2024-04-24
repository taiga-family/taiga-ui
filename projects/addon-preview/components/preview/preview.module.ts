import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {TuiPanModule, TuiZoomModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiHintModule,
    TuiLoaderModule,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPreviewPaginationComponent} from './pagination/preview-pagination.component';
import {TuiPreviewComponent} from './preview.component';
import {TuiPreviewActionDirective} from './preview-action/preview-action.directive';
import {TuiPreviewActionModule} from './preview-action/preview-action.module';
import {TuiPreviewTitleComponent} from './title/preview-title.component';
import {TuiPreviewZoomComponent} from './zoom/preview-zoom.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        MutationObserverModule,
        ResizeObserverModule,
        TuiButtonDirective,
        FormsModule,
        TuiSliderModule,
        TuiHintModule,
        TuiSvgComponent,
        TuiLoaderModule,
        TuiPanModule,
        TuiZoomModule,
        TuiPreviewActionModule,
    ],
    declarations: [
        TuiPreviewComponent,
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
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
export class TuiPreviewModule {}
