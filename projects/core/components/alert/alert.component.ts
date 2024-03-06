import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse, tuiSlideIn} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {fromEvent, repeat, takeUntil, timer} from 'rxjs';

import type {TuiAlertOptions} from './alert.interfaces';
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
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    protected readonly position = inject(TUI_ALERT_POSITION);
    protected readonly item =
        inject<TuiPopover<TuiAlertOptions<I>, O>>(POLYMORPHEUS_CONTEXT);

    protected readonly autoClose =
        typeof this.item.autoClose === 'function'
            ? this.item.autoClose(this.item.status)
            : this.item.autoClose;

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected readonly animation = this.position.endsWith('auto')
        ? {...this.options, value: 'right'}
        : {...this.options, value: 'left'};

    public ngOnInit(): void {
        this.initAutoClose();
    }

    protected close(): void {
        this.item.$implicit.complete();
    }

    private initAutoClose(): void {
        if (!this.autoClose) {
            return;
        }

        timer(this.autoClose)
            .pipe(
                takeUntil(fromEvent(this.el, 'mouseenter')),
                repeat({delay: () => fromEvent(this.el, 'mouseleave')}),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.close());
    }
}
