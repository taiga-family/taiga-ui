import {Directive, inject, Injectable, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';
import {TuiNotificationService} from '@taiga-ui/core/directives/notification';

import {TuiToastComponent} from './toast.component';
import {
    TUI_TOAST_CONCURRENCY,
    TUI_TOAST_OPTIONS,
    type TuiToastOptions,
} from './toast.options';

@Injectable({
    providedIn: 'root',
})
export class TuiToastService extends TuiNotificationService<TuiToastOptions<any>> {
    protected override readonly options = inject(TUI_TOAST_OPTIONS);
    protected override readonly component = TuiToastComponent;

    constructor() {
        super(inject(TUI_TOAST_CONCURRENCY));
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
