import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFadeIn, tuiHeightCollapse, tuiSlideIn} from '@taiga-ui/core/animations';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiNotification} from '@taiga-ui/core/components/notification';
import {TuiTitle} from '@taiga-ui/core/directives/title';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {POLYMORPHEUS_CONTEXT, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {EMPTY, fromEvent, of, repeat, switchMap, takeUntil, timer} from 'rxjs';

import type {TuiAlertOptions} from './alert.interfaces';
import {TUI_ALERT_POSITION} from './alert.tokens';

@Component({
    standalone: true,
    selector: 'tui-alert',
    imports: [NgIf, PolymorpheusOutlet, TuiNotification, TuiButton, TuiTitle],
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
export class TuiAlertComponent<O, I> {
    private readonly el = tuiInjectElement();

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly close = toSignal(inject(TUI_CLOSE_WORD));
    protected readonly position = inject(TUI_ALERT_POSITION);
    protected readonly item =
        inject<TuiPopover<TuiAlertOptions<I>, O>>(POLYMORPHEUS_CONTEXT);

    protected readonly animation = this.position.endsWith('auto')
        ? {...this.options, value: 'right'}
        : {...this.options, value: 'left'};

    protected readonly sub = of(
        typeof this.item.autoClose === 'function'
            ? this.item.autoClose(this.item.appearance)
            : this.item.autoClose,
    )
        .pipe(
            switchMap((autoClose) => (autoClose ? timer(autoClose) : EMPTY)),
            takeUntil(fromEvent(this.el, 'mouseenter')),
            repeat({delay: () => fromEvent(this.el, 'mouseleave')}),
            takeUntilDestroyed(),
        )
        .subscribe(() => this.item.$implicit.complete());
}
