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
import {tuiFadeIn, tuiHeightCollapse, tuiSlideIn} from '@taiga-ui/core/animations';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';
import {TUI_ANIMATION_OPTIONS} from '@taiga-ui/core/tokens';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {fromEvent, timer} from 'rxjs';
import {repeatWhen, takeUntil} from 'rxjs/operators';

import {TUI_ALERT_POSITION} from './alert.providers';

// TODO: get rid of $any in template
@Component({
    selector: 'tui-alert',
    templateUrl: './alert.template.html',
    styleUrls: ['./alert.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse],
    host: {
        role: 'alert',
        '[style.margin]': 'position',
        '[@tuiFadeIn]': 'options',
        '[@tuiSlideIn]': 'animation',
        '[@tuiHeightCollapse]': 'animation',
    },
})
export class TuiAlertComponent<O, I> implements OnInit {
    private readonly autoClose =
        typeof this.item.autoClose === 'function'
            ? this.item.autoClose(this.item.status)
            : this.item.autoClose;

    readonly animation = this.position.endsWith('auto')
        ? {
              ...this.options,
              value: 'right',
          }
        : {
              ...this.options,
              value: 'left',
          };

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(TUI_ALERT_POSITION) readonly position: string,
        @Inject(TUI_ANIMATION_OPTIONS) readonly options: AnimationOptions,
        @Inject(POLYMORPHEUS_CONTEXT) readonly item: TuiDialog<TuiAlertOptions<I>, O>,
    ) {}

    ngOnInit(): void {
        this.initAutoClose();
    }

    close(): void {
        this.item.$implicit.complete();
    }

    private initAutoClose(): void {
        if (!this.autoClose) {
            return;
        }

        timer(tuiIsNumber(this.autoClose) ? this.autoClose : 3000)
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
            .subscribe(() => this.close());
    }
}
