import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
import {TuiDragModule, TuiPanModule, TuiResizeModule, TuiZoomModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLoaderModule,
    TuiManualHintModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiPreviewActionComponent} from './action/preview-action.component';
import {TuiPreviewLoadingComponent} from './loading/preview-loading.component';
import {TuiPreviewPaginationComponent} from './pagination/preview-pagination.component';
import {TuiPreviewComponent} from './preview.component';
import {TuiPreviewTitleComponent} from './title/preview-title.component';
import {TuiPreviewZoomComponent} from './zoom/preview-zoom.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        MutationObserverModule,
        TuiButtonModule,
        FormsModule,
        TuiSliderModule,
        TuiHintModule,
        TuiDragModule,
        TuiManualHintModule,
        TuiResizeModule,
        TuiSvgModule,
        TuiLoaderModule,
        TuiPanModule,
        TuiZoomModule,
    ],
    declarations: [
        TuiPreviewComponent,
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
        TuiPreviewZoomComponent,
        TuiPreviewActionComponent,
        TuiPreviewLoadingComponent,
    ],
    exports: [
        TuiPreviewComponent,
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
        TuiPreviewZoomComponent,
        TuiPreviewActionComponent,
        TuiPreviewLoadingComponent,
    ],
})
export class TuiPreviewModule {}
