import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiNotification} from '@taiga-ui/core/components/notification';
import {TuiTitle} from '@taiga-ui/core/directives/title';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {EMPTY, fromEvent, of, repeat, switchMap, takeUntil, timer} from 'rxjs';

import {type TuiAlertOptions} from './alert.interfaces';
import {TUI_ALERT_POSITION} from './alert.tokens';

@Component({
    selector: 'tui-alert',
    imports: [PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
    templateUrl: './alert.template.html',
    styleUrl: './alert.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        role: 'alert',
        '[style.margin]': 'position',
        '[style.--tui-from]': 'from',
    },
})
export class TuiAlertComponent<O, I> {
    private readonly el = tuiInjectElement();

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly close = toSignal(inject(TUI_CLOSE_WORD));
    protected readonly position = inject(TUI_ALERT_POSITION);
    protected readonly item = injectContext<TuiPortalContext<TuiAlertOptions<I>, O>>();

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

    public get from(): string {
        return this.position.endsWith('auto') ? 'translateX(100%)' : 'translateX(-100%)';
    }
}
