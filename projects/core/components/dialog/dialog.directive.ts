import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';

import {TuiDialogService} from './dialog.service';

@Directive({
    selector: 'ng-template[tuiDialog]',
    // eslint-disable-next-line @angular-eslint/no-input-rename
    inputs: ['options: tuiDialogOptions', 'open: tuiDialog'],
    outputs: ['openChange: tuiDialogChange'],
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiDialogService,
        },
    ],
})
export class TuiDialogDirective<T> extends AbstractTuiDialogDirective<
    TuiDialogOptions<T>
> {}
