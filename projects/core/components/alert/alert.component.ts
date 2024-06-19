import {NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFadeIn, tuiHeightCollapse, tuiSlideIn} from '@taiga-ui/core/animations';
import {TuiNotification} from '@taiga-ui/core/components/notification';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {fromEvent, repeat, takeUntil, timer} from 'rxjs';

import type {TuiAlertOptions} from './alert.interfaces';
import {TUI_ALERT_POSITION} from './alert.tokens';

@Component({
    standalone: true,
    selector: 'tui-alert',
    imports: [TuiNotification, NgIf, PolymorpheusOutlet, PolymorpheusTemplate],
    templateUrl: './alert.template.html',
    styleUrls: ['./alert.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse],
    host: {
        role: 'alert',
        '[style.margin]': 'position',
        '[@tuiFadeIn]': 'options',
        '[@tuiSlideIn]': 'animation',
        '[@tuiHeightCollapse]': 'animation',
    },
})
export class TuiAlert<O, I> implements OnInit {
    private readonly el = tuiInjectElement();
    private readonly destroyRef = inject(DestroyRef);
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
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.close());
    }
}
