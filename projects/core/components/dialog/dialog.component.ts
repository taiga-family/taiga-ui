import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {filter, isObservable, map, merge, of, Subject, switchMap} from 'rxjs';

import type {TuiDialogOptions, TuiDialogSize} from './dialog.interfaces';
import {TUI_DIALOGS_CLOSE} from './dialog.tokens';
import {TuiDialogCloseService} from './dialog-close.service';

const REQUIRED_ERROR = new Error('Required dialog was dismissed');

function toObservable<T>(valueOrStream: Observable<T> | T): Observable<T> {
    return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}

@Component({
    standalone: true,
    selector: 'tui-dialog',
    imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
    templateUrl: './dialog.template.html',
    styleUrls: ['./dialog.style.less'],
    // So we don't force OnPush on dialog content
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDialogCloseService],
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '[@tuiSlideInTop]': 'slideInTop()',
        '[@tuiFadeIn]': 'slideInTop()',
        '[attr.data-appearance]': 'context.appearance',
        '[attr.data-size]': 'size',
        '[class._centered]': 'header',
    },
})
export class TuiDialogComponent<O, I> {
    private readonly speed = inject(TUI_ANIMATIONS_SPEED);

    private readonly animation = {
        value: '',
        params: {
            start: '40px',
            duration: tuiGetDuration(this.speed),
        },
    } as const;

    private readonly fullscreenAnimation = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(this.speed),
        },
    } as const;

    protected readonly close$ = new Subject<void>();
    protected readonly context = injectContext<TuiPopover<TuiDialogOptions<I>, O>>();
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly slideInTop = computed(() =>
        this.size === 'fullscreen' || this.size === 'page' || this.isMobile()
            ? this.fullscreenAnimation
            : this.animation,
    );

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === 'mobile')),
    );

    constructor() {
        merge(
            this.close$.pipe(switchMap(() => toObservable(this.context.closeable))),
            inject(TuiDialogCloseService).pipe(
                switchMap(() => toObservable(this.context.dismissible)),
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

    protected get header(): PolymorpheusContent<TuiPopover<TuiDialogOptions<I>, O>> {
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
