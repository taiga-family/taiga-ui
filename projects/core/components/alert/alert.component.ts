import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnInit,
    Self,
} from '@angular/core';
import {TuiDestroyService, TuiDialog, tuiIsNumber} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse, tuiSlideInRight} from '@taiga-ui/core/animations';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core/tokens';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {fromEvent, timer} from 'rxjs';
import {repeatWhen, takeUntil} from 'rxjs/operators';

// TODO: get rid of $any in template
@Component({
    selector: 'tui-alert',
    templateUrl: './alert.template.html',
    styleUrls: ['./alert.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse],
    host: {
        role: 'alert',
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInRight]': 'animation',
        '[@tuiHeightCollapse]': 'animation',
    },
})
export class TuiAlertComponent<O, I> implements OnInit {
    private readonly autoClose =
        typeof this.item.autoClose === 'function'
            ? this.item.autoClose(this.item.status)
            : this.item.autoClose;

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(TUI_NOTIFICATION_OPTIONS)
        private readonly options: TuiNotificationDefaultOptions,
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions,
        @Inject(POLYMORPHEUS_CONTEXT) readonly item: TuiDialog<TuiAlertOptions<I>, O>,
    ) {}

    ngOnInit(): void {
        this.initAutoClose();
    }

    closeNotification(): void {
        this.item.$implicit.complete();
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
                takeUntil(fromEvent(this.el.nativeElement, 'mouseenter')),
                /**
                 * TODO: replace to
                 * repeat({
                 *    delay: () => fromEvent(this.el.nativeElement, 'mouseleave'),
                 * })
                 *
                 * in RxJS 7
                 */
                // eslint-disable-next-line rxjs/no-ignored-notifier
                repeatWhen(() => fromEvent(this.el.nativeElement, 'mouseleave')),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.closeNotification());
    }
}
