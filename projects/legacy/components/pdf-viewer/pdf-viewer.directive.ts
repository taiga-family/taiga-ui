import {Directive, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {type TuiPdfViewerOptions} from './pdf-viewer.options';
import {TuiPdfViewerService} from './pdf-viewer.service';

@Directive({
    selector: 'ng-template[tuiPdfViewer]',
    providers: [tuiAsPortal(TuiPdfViewerService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiPdfViewerOptions', 'open: tuiPdfViewer'],
            outputs: ['openChange: tuiPdfViewerChange'],
        },
    ],
})
export class TuiPdfViewerDirective<T> {
    public readonly tuiPdfViewerOptions = input<Partial<TuiPdfViewerOptions<T>>>({});
}
