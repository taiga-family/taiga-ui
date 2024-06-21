import {TuiPreviewPagination} from './pagination/preview-pagination.component';
import {TuiPreviewComponent} from './preview.component';
import {TuiPreviewAction} from './preview-action/preview-action.directive';
import {TuiPreviewTitle} from './title/preview-title.component';
import {TuiPreviewZoom} from './zoom/preview-zoom.component';

export const TuiPreview = [
    TuiPreviewComponent,
    TuiPreviewTitle,
    TuiPreviewPagination,
    TuiPreviewAction,
    TuiPreviewZoom,
] as const;
