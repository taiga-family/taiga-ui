import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
import {PREVIEW_DIALOG_PROVIDER} from '@taiga-ui/addon-preview/components/preview-dialog';
import {TuiDragModule, TuiPanModule, TuiResizeModule, TuiZoomModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLoaderModule,
    TuiSvgModule,
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
        TuiButtonModule,
        FormsModule,
        TuiSliderModule,
        TuiHintModule,
        TuiDragModule,
        TuiResizeModule,
        TuiSvgModule,
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
    providers: [PREVIEW_DIALOG_PROVIDER],
})
export class TuiPreviewModule {}
