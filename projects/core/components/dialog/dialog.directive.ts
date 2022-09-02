import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';
import type {TuiDialogOptions} from '@taiga-ui/core/interfaces';

import {TuiDialogService} from './dialog.service';

@Directive({
    selector: `ng-template[tuiDialog]`,
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiDialogService,
        },
    ],
    inputs: [`options: tuiDialogOptions`, `open: tuiDialog`],
    outputs: [`openChange: tuiDialogChange`],
})
export class TuiDialogDirective<T> extends AbstractTuiDialogDirective<
    TuiDialogOptions<T>
> {}
