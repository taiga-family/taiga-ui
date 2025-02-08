/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {DOCUMENT, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {EVENT_MANAGER_PLUGINS} from '@angular/platform-browser';
import {tuiAsPortal, TuiPortals} from '@taiga-ui/cdk/classes';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiFontSize} from '@taiga-ui/cdk/directives/font-size';
import {TuiPlatform} from '@taiga-ui/cdk/directives/platform';
import {TuiVisualViewport} from '@taiga-ui/cdk/directives/visual-viewport';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiAlerts} from '@taiga-ui/core/components/alert';
import {TuiDialogs} from '@taiga-ui/core/components/dialog';
import {
    TUI_SCROLLBAR_OPTIONS,
    TuiScrollControls,
} from '@taiga-ui/core/components/scrollbar';
import {TuiDropdowns} from '@taiga-ui/core/directives/dropdown';
import {TuiHints} from '@taiga-ui/core/directives/hint';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_REDUCED_MOTION, TUI_THEME} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils';
import {PreventEventPlugin} from '@taiga-ui/event-plugins';
import {map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-root',
    imports: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiScrollControls],
    templateUrl: './root.template.html',
    styleUrls: ['./root.style.less'],
    encapsulation: ViewEncapsulation.None,
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    viewProviders: [tuiAsPortal(TuiPopupService)],
    hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-duration.ms]': 'duration',
        '[style.--tui-scroll-behavior]': 'reducedMotion ? "auto" : "smooth"',
        '[class._mobile]': 'isMobileRes()',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        '(touchstart.passive.zoneless)': '0',
    },
})
export class TuiRoot extends TuiPortals {
    protected readonly reducedMotion = inject(TUI_REDUCED_MOTION);
    protected readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));

    protected readonly isMobileRes = toSignal(
        inject(TuiBreakpointService).pipe(
            map((breakpoint) => breakpoint === 'mobile'),
            tuiWatch(),
        ),
        {initialValue: false},
    );

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';

    protected readonly scrollbars = !(this.nativeScrollbar || inject(TUI_IS_MOBILE));

    constructor() {
        super();

        inject(DOCUMENT).documentElement.setAttribute(
            'data-tui-theme',
            inject(TUI_THEME).toLowerCase(),
        );

        if (!this.nativeScrollbar) {
            inject(DOCUMENT).defaultView?.document.documentElement.classList.add(
                'tui-zero-scrollbar',
            );
        }

        ngDevMode &&
            console.assert(
                !!inject<unknown[]>(EVENT_MANAGER_PLUGINS).find(
                    (plugin) => plugin instanceof PreventEventPlugin,
                ),
                'NG_EVENT_PLUGINS is missing from global providers',
            );
    }
}
