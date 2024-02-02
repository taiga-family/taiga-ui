import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    inject,
    OnInit,
    Self,
} from '@angular/core';
import {TuiDestroyService, TuiPopover} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse, tuiSlideIn} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {fromEvent, repeat, takeUntil, timer} from 'rxjs';

import {TuiAlertOptions} from './alert.interfaces';
import {TUI_ALERT_POSITION} from './alert.tokens';

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

    readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    readonly animation = this.position.endsWith('auto')
        ? {...this.options, value: 'right'}
        : {...this.options, value: 'left'};

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(TUI_ALERT_POSITION) readonly position: string,
        @Inject(POLYMORPHEUS_CONTEXT) readonly item: TuiPopover<TuiAlertOptions<I>, O>,
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

        timer(this.autoClose)
            .pipe(
                takeUntil(fromEvent(this.el.nativeElement, 'mouseenter')),
                repeat({delay: () => fromEvent(this.el.nativeElement, 'mouseleave')}),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.close());
    }
}
