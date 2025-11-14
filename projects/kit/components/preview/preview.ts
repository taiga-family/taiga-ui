import {TuiPreviewAction} from './action/preview-action.directive';
import {TuiPreviewDialogDirective} from './dialog/preview-dialog.directive';
import {TuiPreviewPagination} from './pagination/preview-pagination.component';
import {TuiPreviewComponent} from './preview.component';
import {TuiPreviewTitle} from './title/preview-title.component';
import {TuiPreviewZoom} from './zoom/preview-zoom.component';

export const TuiPreview = [
    TuiPreviewComponent,
    TuiPreviewDialogDirective,
    TuiPreviewTitle,
    TuiPreviewPagination,
    TuiPreviewAction,
    TuiPreviewZoom,
] as const;
