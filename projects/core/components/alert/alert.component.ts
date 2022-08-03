import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    OnInit,
} from '@angular/core';
import {
    TuiContextWithImplicit,
    TuiDestroyService,
    TuiDialog,
    tuiIsNumber,
    tuiPure,
} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse, tuiSlideInRight} from '@taiga-ui/core/animations';
import {TuiNotification} from '@taiga-ui/core/enums';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core/tokens';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {fromEvent, timer} from 'rxjs';
import {repeatWhen, takeUntil} from 'rxjs/operators';

// TODO: 3.0 Remove and start using TuiDialog<TuiAlertOptions<I>, O>
export interface TuiNotificationContentContext<O = void, I = undefined>
    extends TuiContextWithImplicit<TuiNotification> {
    label: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>>;
    data: I;
    closeHook: () => void;
    emitHook: (data: O) => void;
    emitAndCloseHook: (data: O) => void;
}

// TODO: 3.0 Refactor according to new context by 3.0 and get rid of $any in template
@Component({
    selector: `tui-alert`,
    templateUrl: `./alert.template.html`,
    styleUrls: [`./alert.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse],
    host: {role: `alert`},
})
export class TuiAlertComponent<O, I> implements OnInit {
    private readonly autoClose =
        typeof this.item.autoClose === `function`
            ? this.item.autoClose(this.item.status)
            : this.item.autoClose;

    @HostBinding(`@tuiFadeIn`)
    @HostBinding(`@tuiSlideInRight`)
    @HostBinding(`@tuiHeightCollapse`)
    readonly animation = {value: ``, ...this.animationOptions} as const;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(TUI_NOTIFICATION_OPTIONS)
        private readonly options: TuiNotificationDefaultOptions,
        @Inject(TUI_ANIMATION_OPTIONS)
        private readonly animationOptions: AnimationOptions,
        @Inject(POLYMORPHEUS_CONTEXT) readonly item: TuiDialog<TuiAlertOptions<I>, O>,
    ) {}

    ngOnInit(): void {
        this.initAutoClose();
    }

    get context(): TuiNotificationContentContext<O, I> {
        return this.calculateContext(this.item);
    }

    closeNotification(): void {
        this.item.$implicit.complete();
    }

    @tuiPure
    private calculateContext({
        $implicit,
        status,
        data,
        label,
    }: TuiDialog<TuiAlertOptions<I>, O>): TuiNotificationContentContext<O, I> {
        return {
            $implicit: status,
            data,
            label,
            closeHook: () => {
                $implicit.complete();
            },
            emitHook: (data: O) => {
                $implicit.next(data);
            },
            emitAndCloseHook: (data: O) => {
                $implicit.next(data);
                $implicit.complete();
            },
        };
    }

    private initAutoClose(): void {
        if (!this.autoClose) {
            return;
        }

        timer(
            tuiIsNumber(this.autoClose)
                ? this.autoClose
                : this.options.defaultAutoCloseTime,
        )
            .pipe(
                takeUntil(fromEvent(this.elementRef.nativeElement, `mouseenter`)),
                // eslint-disable-next-line rxjs/no-ignored-notifier
                repeatWhen(() => fromEvent(this.elementRef.nativeElement, `mouseleave`)),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.closeNotification());
    }
}
