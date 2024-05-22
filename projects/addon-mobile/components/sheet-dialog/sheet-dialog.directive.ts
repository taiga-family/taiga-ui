import {Directive} from '@angular/core';
import {tuiAsPopover, TuiPopoverDirective} from '@taiga-ui/cdk';

import type {TuiSheetDialogOptions} from './sheet-dialog.options';
import {TuiSheetDialogService} from './sheet-dialog.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiSheetDialog]',
    inputs: ['options: tuiSheetDialogOptions', 'open: tuiSheetDialog'],
    outputs: ['openChange: tuiSheetDialogChange'],
    providers: [tuiAsPopover(TuiSheetDialogService)],
})
export class TuiSheetDialogDirective extends TuiPopoverDirective<TuiSheetDialogOptions> {}
