import {Directive} from '@angular/core';
import {tuiAsPopover, TuiPopoverDirective} from '@taiga-ui/cdk';

import type {TuiPdfViewerOptions} from './pdf-viewer.options';
import {TuiPdfViewerService} from './pdf-viewer.service';

@Directive({
    selector: 'ng-template[tuiPdfViewer]',
    inputs: ['options: tuiPdfViewerOptions', 'open: tuiPdfViewer'],
    outputs: ['openChange: tuiPdfViewerChange'],
    providers: [tuiAsPopover(TuiPdfViewerService)],
})
export class TuiPdfViewerDirective<T> extends TuiPopoverDirective<
    TuiPdfViewerOptions<T>
> {}
