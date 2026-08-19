import {Directive, inject, Injectable, input} from '@angular/core';
import {
    tuiAsPortal,
    TuiPortalDirective,
    type TuiPortalService,
} from '@taiga-ui/cdk/portals';
import {TuiAlertService} from '@taiga-ui/core/portals/alert';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';

import {TuiToastComponent} from './toast.component';
import {
    TUI_TOAST_CONCURRENCY,
    TUI_TOAST_OPTIONS,
    type TuiToastOptions,
} from './toast.options';

@Injectable({providedIn: 'root', deps: [TuiPopupService], useClass: TuiToastService})
export class TuiToastService extends TuiAlertService<TuiToastOptions<any>> {
    protected override readonly options = inject(TUI_TOAST_OPTIONS);
    protected override readonly component = TuiToastComponent;

    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(service: TuiPortalService) {
        super(inject(TUI_TOAST_CONCURRENCY), service);
    }
}

@Directive({
    selector: 'ng-template[tuiToast]',
    providers: [tuiAsPortal(TuiToastService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiToastOptions', 'open: tuiToast'],
            outputs: ['openChange: tuiToastChange'],
        },
    ],
})
export class TuiToastTemplate<T> {
    public readonly tuiToastOptions = input<Partial<TuiToastOptions<T>>>({});
}
