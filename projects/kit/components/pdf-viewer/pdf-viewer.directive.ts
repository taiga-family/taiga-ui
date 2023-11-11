import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';

import {TuiPdfViewerOptions} from './pdf-viewer.options';
import {TuiPdfViewerService} from './pdf-viewer.service';

@Directive({
    selector: 'ng-template[tuiPdfViewer]',
    // eslint-disable-next-line @angular-eslint/no-input-rename
    inputs: ['options: tuiPdfViewerOptions', 'open: tuiPdfViewer'],
    outputs: ['openChange: tuiPdfViewerChange'],
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiPdfViewerService,
        },
    ],
})
export class TuiPdfViewerDirective<T> extends AbstractTuiDialogDirective<
    TuiPdfViewerOptions<T>
> {}
