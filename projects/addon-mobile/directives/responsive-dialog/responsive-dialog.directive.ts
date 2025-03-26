import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core';

import {TuiResponsiveDialogService} from './responsive-dialog.service';

@Directive({
    selector: 'ng-template[tuiResponsiveDialog]',
    inputs: ['options: tuiResponsiveDialogOptions', 'open: tuiResponsiveDialog'],
    outputs: ['openChange: tuiResponsiveDialogChange'],
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiResponsiveDialogService,
        },
    ],
})
export class TuiResponsiveDialogDirective<T> extends AbstractTuiDialogDirective<
    TuiDialogOptions<T>
> {}
