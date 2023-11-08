import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';

import {TuiSheetDialogOptions} from './sheet-dialog.options';
import {TuiSheetDialogService} from './sheet-dialog.service';

@Directive({
    selector: 'ng-template[tuiSheetDialog]',
    inputs: ['options: tuiSheetDialogOptions', 'open: tuiSheetDialog'],
    outputs: ['openChange: tuiSheetDialogChange'],
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiSheetDialogService,
        },
    ],
})
export class TuiSheetDialogDirective extends AbstractTuiDialogDirective<TuiSheetDialogOptions> {}
