import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import {TuiPreviewDialogService} from './preview-dialog.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiPreviewDialog]',
    inputs: ['open: tuiPreviewDialog'],
    outputs: ['openChange: tuiPreviewDialogChange'],
    providers: [tuiAsPopover(TuiPreviewDialogService)],
})
export class TuiPreviewDialogDirective extends TuiPopoverDirective<unknown> {}
