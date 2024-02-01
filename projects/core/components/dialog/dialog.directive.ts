import {Directive} from '@angular/core';
import {TuiPopoverDirective, TuiPopoverService} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';

import {TuiDialogService} from './dialog.service';

@Directive({
    selector: 'ng-template[tuiDialog]',
    inputs: ['options: tuiDialogOptions', 'open: tuiDialog'],
    outputs: ['openChange: tuiDialogChange'],
    providers: [
        {
            provide: TuiPopoverService,
            useExisting: TuiDialogService,
        },
    ],
})
export class TuiDialogDirective<T> extends TuiPopoverDirective<TuiDialogOptions<T>> {}
