import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import {
    type TuiResponsiveDialogOptions,
    TuiResponsiveDialogService,
} from './responsive-dialog.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiResponsiveDialog]',
    inputs: ['options: tuiResponsiveDialogOptions', 'open: tuiResponsiveDialog'],
    outputs: ['openChange: tuiResponsiveDialogChange'],
    providers: [tuiAsPopover(TuiResponsiveDialogService as any)],
})
export class TuiResponsiveDialog extends TuiPopoverDirective<TuiResponsiveDialogOptions> {}
