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
    TuiDialog,
} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiAnimationOptions, TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TuiCommonIcons,
} from '@taiga-ui/core/tokens';
import {TuiDialogSize} from '@taiga-ui/core/types';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {isObservable, merge, Observable, of, Subject} from 'rxjs';
import {filter, map, switchMap, takeUntil} from 'rxjs/operators';

import {TUI_DIALOGS_CLOSE} from './dialog.tokens';
import {TuiDialogCloseService} from './dialog-close.service';

const REQUIRED_ERROR = new Error('Required dialog was dismissed');

@Component({
    selector: 'tui-dialog',
    templateUrl: './dialog.template.html',
    styleUrls: ['./dialog.style.less'],
    // So we don't force OnPush on dialog content
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiDestroyService, TuiDialogCloseService],
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiDialogComponent<O, I> {
    private readonly animation = {
        value: '',
        params: {
            start: '40px',
            duration: this.duration,
        },
    } as const;

    private readonly fullscreenAnimation = {
        value: '',
        params: {
            start: '100vh',
            duration: this.duration,
        },
    } as const;

    readonly close$ = new Subject();

    constructor(
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<TuiDialogOptions<I>, O>,
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
    get header(): PolymorpheusContent<TuiDialog<TuiDialogOptions<I>, O>> {
        return this.context.header;
    }

    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    get slideInTop(): TuiAnimationOptions {
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

function toObservable<T>(valueOrStream: Observable<T> | T): Observable<T> {
    return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
