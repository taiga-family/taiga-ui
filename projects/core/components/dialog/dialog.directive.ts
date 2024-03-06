import {Directive} from '@angular/core';
import {tuiAsPopover, TuiPopoverDirective} from '@taiga-ui/cdk';

import type {TuiDialogOptions} from './dialog.interfaces';
import {TuiDialogService} from './dialog.service';

@Directive({
    selector: 'ng-template[tuiDialog]',
    inputs: ['options: tuiDialogOptions', 'open: tuiDialog'],
    outputs: ['openChange: tuiDialogChange'],
    providers: [tuiAsPopover(TuiDialogService)],
})
export class TuiDialogDirective<T> extends TuiPopoverDirective<TuiDialogOptions<T>> {}
