import {Directive, inject} from '@angular/core';
import {TuiPopoverDirective, TuiPopoverService} from '@taiga-ui/cdk';

import {CustomDialogService} from './custom-dialog.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiCustomDialog]',
    inputs: ['open: tuiCustomDialog', 'options: tuiCustomDialogOptions'],
    outputs: ['openChange: tuiCustomDialogChange'],
    providers: [
        {
            provide: TuiPopoverService,
            useFactory: () => inject(CustomDialogService),
        },
    ],
})
export class CustomDialogDirective<T> extends TuiPopoverDirective<T> {}
