import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiAlertDirective} from '@taiga-ui/core/directives/alert';
import {TuiTitle} from '@taiga-ui/core/directives/title';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {EMPTY, fromEvent, of, repeat, switchMap, takeUntil, timer} from 'rxjs';

import {type TuiNotificationOptions} from './notification.options';
import {TuiNotificationDirective} from './notification.directive';

@Component({
    selector: 'tui-notification-alert',
    imports: [PolymorpheusOutlet, TuiButton, TuiNotificationDirective, TuiTitle],
    templateUrl: './notification.template.html',
    styleUrl: './notification.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated, TuiAlertDirective],
    host: {role: 'alert'},
})
export class TuiNotificationComponent<O, I> {
    private readonly el = tuiInjectElement();

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly close = inject(TUI_CLOSE_WORD);
    protected readonly item =
        injectContext<TuiPortalContext<TuiNotificationOptions<I>, O>>();

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
