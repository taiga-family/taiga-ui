import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import {type TuiDialogOptions} from './dialog.options';
import {TuiDialogService} from './dialog.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiDialog]',
    inputs: ['options: tuiDialogOptions', 'open: tuiDialog'],
    outputs: ['openChange: tuiDialogChange'],
    providers: [tuiAsPopover(TuiDialogService)],
})
export class TuiDialog<T> extends TuiPopoverDirective<TuiDialogOptions<T>> {}
