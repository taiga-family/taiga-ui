import {Directive, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {type TuiSheetDialogOptions} from './sheet-dialog.options';
import {TuiSheetDialogService} from './sheet-dialog.service';

@Directive({
    selector: 'ng-template[tuiSheetDialog]',
    providers: [tuiAsPortal(TuiSheetDialogService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiSheetDialogOptions', 'open: tuiSheetDialog'],
            outputs: ['openChange: tuiSheetDialogChange'],
        },
    ],
})
export class TuiSheetDialog {
    public readonly tuiSheetDialogOptions = input<Partial<TuiSheetDialogOptions>>({});
}
