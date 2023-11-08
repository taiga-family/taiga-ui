import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';

import {TuiAlertService} from './alert.service';

@Directive({
    selector: 'ng-template[tuiAlert]',
    inputs: ['options: tuiAlertOptions', 'open: tuiAlert'],
    outputs: ['openChange: tuiAlertChange'],
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiAlertService,
        },
    ],
})
export class TuiAlertDirective<T> extends AbstractTuiDialogDirective<
    TuiAlertOptions<T>
> {}
