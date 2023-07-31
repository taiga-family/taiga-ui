import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';

import {TuiSheetDialogOptions} from './sheet-dialog.options';
import {TuiSheetDialogService} from './sheet-dialog.service';

@Directive({
    selector: 'ng-template[tuiSheetDialog]',
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiSheetDialogService,
        },
    ],
    inputs: ['options: tuiSheetDialogOptions', 'open: tuiSheetDialog'],
    outputs: ['openChange: tuiSheetDialogChange'],
})
export class TuiSheetDialogDirective extends AbstractTuiDialogDirective<TuiSheetDialogOptions> {}
