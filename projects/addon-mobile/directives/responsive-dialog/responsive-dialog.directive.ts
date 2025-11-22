import {Directive, inject, input} from '@angular/core';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {TuiPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiDialogService} from '@taiga-ui/core/portals/dialog';

import {type TuiResponsiveDialogOptions} from './responsive-dialog.service';

@Directive({
    selector: 'ng-template[tuiResponsiveDialog]',
    providers: [
        {
            provide: TuiPortal,
            useFactory: () =>
                inject(TUI_IS_MOBILE)
                    ? inject(TuiSheetDialogService)
                    : inject(TuiDialogService),
        },
    ],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiResponsiveDialogOptions', 'open: tuiResponsiveDialog'],
            outputs: ['openChange: tuiResponsiveDialogChange'],
        },
    ],
})
export class TuiResponsiveDialog<T> {
    public readonly tuiResponsiveDialogOptions = input<
        Partial<TuiResponsiveDialogOptions<T>>
    >({});
}
