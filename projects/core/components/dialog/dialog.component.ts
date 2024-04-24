import type {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE, TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
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
    selector: 'tui-dialog',
    templateUrl: './dialog.template.html',
    styleUrls: ['./dialog.style.less'],
    // So we don't force OnPush on dialog content
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDialogCloseService],
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '[attr.data-appearance]': 'context.appearance',
    },
})
export class TuiDialogComponent<O, I> {
    private readonly speed = inject(TUI_ANIMATIONS_SPEED);
    private readonly isMobile = inject(TUI_IS_MOBILE);

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

    protected readonly context =
        inject<TuiPopover<TuiDialogOptions<I>, O>>(POLYMORPHEUS_CONTEXT);

    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);

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

    @HostBinding('attr.data-size')
    protected get size(): TuiDialogSize {
        return this.context.size;
    }

    @HostBinding('class._centered')
    protected get header(): PolymorpheusContent<TuiPopover<TuiDialogOptions<I>, O>> {
        return this.context.header;
    }

    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    protected get slideInTop(): AnimationOptions {
        return this.fullscreen || this.isMobile
            ? this.fullscreenAnimation
            : this.animation;
    }

    protected get fullscreen(): boolean {
        return !this.isMobile && (this.size === 'fullscreen' || this.size === 'page');
    }

    private close(): void {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }
}
