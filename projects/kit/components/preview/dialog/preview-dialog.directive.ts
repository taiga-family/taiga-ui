import {Directive} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {TuiPreviewDialogService} from './preview-dialog.service';

@Directive({
    selector: 'ng-template[tuiPreviewDialog]',
    providers: [tuiAsPortal(TuiPreviewDialogService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['open: tuiPreviewDialog'],
            outputs: ['openChange: tuiPreviewDialogChange'],
        },
    ],
})
export class TuiPreviewDialogDirective {}
