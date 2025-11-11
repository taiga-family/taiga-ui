import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiTitle} from '@taiga-ui/core/directives/title';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
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

import {type TuiDialogContext} from './dialog.options';
import {TUI_DIALOGS_CLOSE, TuiDialogCloseService} from './dialog.providers';

const REQUIRED_ERROR = new Error('Required dialog was dismissed');

function toObservable<T>(valueOrStream: Observable<T> | T): Observable<T> {
    return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}

@Component({
    selector: 'tui-dialog',
    imports: [PolymorpheusOutlet, TuiAutoFocus, TuiButton, TuiTitle],
    templateUrl: './dialog.template.html',
    styleUrl: './dialog.style.less',
    encapsulation: ViewEncapsulation.None,
    // So we don't force OnPush on dialog content
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDialogCloseService],
    hostDirectives: [TuiAnimated],
    host: {
        '[attr.data-appearance]': 'context.appearance',
        '[attr.data-size]': 'context.size',
        '[class._closable]': 'context.closable',
        '[class.tui-backdrop-hidden]': 'context.appearance.includes("fullscreen")',
    },
})
export class TuiDialogComponent<O, I> {
    protected readonly close$ = new Subject<void>();
    protected readonly close = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly context = injectContext<TuiDialogContext<I, O>>();

    protected readonly primitive =
        typeof this.context.content === 'function' ||
        Object(this.context.content) !== this.context.content;

    protected readonly sub = merge(
        this.close$.pipe(switchMap(() => toObservable(this.context.closable))),
        inject(TuiDialogCloseService).pipe(
            exhaustMap(() => toObservable(this.context.dismissible).pipe(take(1))),
        ),
        inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER)),
    )
        .pipe(filter(Boolean), takeUntilDestroyed())
        .subscribe(() => {
            if (this.context.required) {
                this.context.$implicit.error(REQUIRED_ERROR);
            } else {
                this.context.$implicit.complete();
            }
        });
}
