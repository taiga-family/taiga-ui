import {Directive, inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover, type TuiPopover, TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {
    tuiCreateToken,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ALERTS} from '@taiga-ui/core/components/alert';
import {BehaviorSubject, pairwise} from 'rxjs';

import {TuiToastComponent} from './toast.component';
import {TUI_TOAST_OPTIONS, type TuiToastOptions} from './toast.options';

const TOASTS = tuiCreateToken(
    new BehaviorSubject<ReadonlyArray<TuiPopover<TuiToastOptions<unknown>, any>>>([]),
);

export const TUI_TOASTS_CONCURRENCY = tuiCreateTokenFromFactory<number>(() =>
    inject(TUI_IS_MOBILE) ? 1 : 2,
);

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiToastService(TOASTS, TuiToastComponent, inject(TUI_TOAST_OPTIONS)),
})
export class TuiToastService extends TuiPopoverService<TuiToastOptions<any>> {
    private readonly concurrency = inject(TUI_TOASTS_CONCURRENCY);
    private readonly alerts = inject(TUI_ALERTS);

    protected readonly sub = this.items$
        .pipe(pairwise(), takeUntilDestroyed())
        .subscribe(([prev, next]) => {
            const closed = prev.filter((item) => !next.includes(item));
            const alerts = this.alerts.value.filter((item) => !closed.includes(item));
            const toasts = new Set([...alerts, ...next.slice(0, this.concurrency)]);

            this.alerts.next(Array.from(toasts));
        });
}

@Directive({
    standalone: true,
    selector: 'ng-template[tuiToast]',
    inputs: ['options: tuiToastOptions', 'open: tuiToast'],
    outputs: ['openChange: tuiToastChange'],
    providers: [tuiAsPopover(TuiToastService)],
})
export class TuiToastTemplate<T> extends TuiPopoverDirective<TuiToastOptions<T>> {}
