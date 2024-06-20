import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import type {TuiPdfViewerOptions} from './pdf-viewer.options';
import {TuiPdfViewerService} from './pdf-viewer.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiPdfViewer]',
    inputs: ['options: tuiPdfViewerOptions', 'open: tuiPdfViewer'],
    outputs: ['openChange: tuiPdfViewerChange'],
    providers: [tuiAsPopover(TuiPdfViewerService)],
})
export class TuiPdfViewerDirective<T> extends TuiPopoverDirective<
    TuiPdfViewerOptions<T>
> {}
