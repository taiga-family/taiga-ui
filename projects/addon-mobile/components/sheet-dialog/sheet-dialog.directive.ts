import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import type {TuiSheetDialogOptions} from './sheet-dialog.options';
import {TuiSheetDialogService} from './sheet-dialog.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiSheetDialog]',
    inputs: ['options: tuiSheetDialogOptions', 'open: tuiSheetDialog'],
    outputs: ['openChange: tuiSheetDialogChange'],
    providers: [tuiAsPopover(TuiSheetDialogService)],
})
export class TuiSheetDialog extends TuiPopoverDirective<TuiSheetDialogOptions> {}
