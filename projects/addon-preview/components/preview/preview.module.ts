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

import {TuiPreviewActionDirective} from '../../directives/preview-action/preview-action.directive';
import {TuiPreviewActionModule} from '../../directives/preview-action/preview-action.module';
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
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
        TuiPreviewZoomComponent,
        TuiPreviewActionDirective,
    ],
})
export class TuiPreviewModule {}
