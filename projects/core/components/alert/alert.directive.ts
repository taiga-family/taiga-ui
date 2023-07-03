import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';

import {TuiAlertService} from './alert.service';

@Directive({
    selector: 'ng-template[tuiAlert]',
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiAlertService,
        },
    ],
    inputs: ['options: tuiAlertOptions', 'open: tuiAlert'],
    outputs: ['openChange: tuiAlertChange'],
})
export class TuiAlertDirective<T> extends AbstractTuiDialogDirective<
    TuiAlertOptions<T>
> {}
