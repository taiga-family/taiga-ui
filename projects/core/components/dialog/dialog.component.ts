import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Self,
} from '@angular/core';
import {
    ALWAYS_TRUE_HANDLER,
    TUI_IS_MOBILE,
    TuiDestroyService,
    TuiPopover,
} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TuiCommonIcons,
} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {
    filter,
    isObservable,
    map,
    merge,
    Observable,
    of,
    Subject,
    switchMap,
    takeUntil,
} from 'rxjs';

import {TuiDialogOptions, TuiDialogSize} from './dialog.interfaces';
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
    providers: [TuiDestroyService, TuiDialogCloseService],
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '[attr.data-appearance]': 'context.appearance',
    },
})
export class TuiDialogComponent<O, I> {
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

    readonly close$ = new Subject<void>();

    constructor(
        @Inject(TUI_ANIMATIONS_SPEED) private readonly speed: number,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiPopover<TuiDialogOptions<I>, O>,
        @Inject(TuiDestroyService) @Self() destroy$: Observable<void>,
        @Inject(TuiDialogCloseService) dialogClose$: Observable<unknown>,
        @Inject(TUI_DIALOGS_CLOSE) close$: Observable<unknown>,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
    ) {
        merge(
            this.close$.pipe(switchMap(() => toObservable(context.closeable))),
            dialogClose$.pipe(switchMap(() => toObservable(context.dismissible))),
            close$.pipe(map(ALWAYS_TRUE_HANDLER)),
        )
            .pipe(filter(Boolean), takeUntil(destroy$))
            .subscribe(() => {
                this.close();
            });
    }

    @HostBinding('attr.data-size')
    get size(): TuiDialogSize {
        return this.context.size;
    }

    @HostBinding('class._centered')
    get header(): PolymorpheusContent<TuiPopover<TuiDialogOptions<I>, O>> {
        return this.context.header;
    }

    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    get slideInTop(): AnimationOptions {
        return this.fullscreen || this.isMobile
            ? this.fullscreenAnimation
            : this.animation;
    }

    get fullscreen(): boolean {
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
