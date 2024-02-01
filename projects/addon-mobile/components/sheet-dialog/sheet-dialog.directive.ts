import {Directive} from '@angular/core';
import {TuiPopoverDirective, TuiPopoverService} from '@taiga-ui/cdk';

import {TuiSheetDialogOptions} from './sheet-dialog.options';
import {TuiSheetDialogService} from './sheet-dialog.service';

@Directive({
    selector: 'ng-template[tuiSheetDialog]',
    inputs: ['options: tuiSheetDialogOptions', 'open: tuiSheetDialog'],
    outputs: ['openChange: tuiSheetDialogChange'],
    providers: [
        {
            provide: TuiPopoverService,
            useExisting: TuiSheetDialogService,
        },
    ],
})
export class TuiSheetDialogDirective extends TuiPopoverDirective<TuiSheetDialogOptions> {}
