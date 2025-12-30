import {Directive, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {type TuiDialogOptions} from './dialog.options';
import {TuiDialogService} from './dialog.service';

@Directive({
    selector: 'ng-template[tuiDialog]',
    providers: [tuiAsPortal(TuiDialogService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiDialogOptions', 'open: tuiDialog'],
            outputs: ['openChange: tuiDialogChange'],
        },
    ],
})
export class TuiDialog<T> {
    public readonly tuiDialogOptions = input<Partial<TuiDialogOptions<T>>>({});
}
