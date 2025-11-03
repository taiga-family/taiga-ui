import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_DIALOGS_CLOSE, TuiDialogCloseService} from '@taiga-ui/core/components/dialog';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {
    injectContext,
    type PolymorpheusContent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';
import {
    exhaustMap,
    filter,
    isObservable,
    map,
    merge,
    type Observable,
    of,
    Subject,
    switchMap,
    take,
} from 'rxjs';

import {TuiDialogContext, type TuiDialogSize} from './dialog.interfaces';

const REQUIRED_ERROR = new Error('Required dialog was dismissed');

function toObservable<T>(valueOrStream: Observable<T> | T): Observable<T> {
    return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}

@Component({
    selector: 'tui-dialog-legacy',
    imports: [PolymorpheusOutlet, TuiAutoFocus, TuiButton],
    templateUrl: './dialog.template.html',
    styleUrl: './dialog.style.less',
    // So we don't force OnPush on dialog content
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDialogCloseService],
    hostDirectives: [TuiAnimated],
    host: {
        '[attr.data-appearance]': 'context.appearance',
        '[attr.data-size]': 'size',
        '[class._centered]': 'header',
        '[style.--tui-from]': 'from()',
    },
})
export class TuiDialogComponent<O, I> {
    protected readonly close$ = new Subject<void>();
    protected readonly context = injectContext<TuiDialogContext<I, O>>();
    protected readonly closeWord = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly from = computed(() =>
        this.size === 'fullscreen' || this.size === 'page' || this.isMobile()
            ? 'translateY(100vh)'
            : 'translateY(2.5rem)',
    );

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === 'mobile')),
    );

    constructor() {
        merge(
            this.close$.pipe(switchMap(() => toObservable(this.context.closable))),
            inject(TuiDialogCloseService).pipe(
                exhaustMap(() => toObservable(this.context.dismissible).pipe(take(1))),
            ),
            inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER)),
        )
            .pipe(filter(Boolean), takeUntilDestroyed())
            .subscribe(() => {
                this.close();
            });
    }

    protected get size(): TuiDialogSize {
        return this.context.size;
    }

    protected get header(): PolymorpheusContent<TuiDialogContext<I, O>> {
        return this.context.header;
    }

    private close(): void {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }
}
