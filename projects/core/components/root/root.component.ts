/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {DOCUMENT, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {EVENT_MANAGER_PLUGINS} from '@angular/platform-browser';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiFontSize} from '@taiga-ui/cdk/directives/font-size';
import {TuiPlatform} from '@taiga-ui/cdk/directives/platform';
import {TuiVisualViewport} from '@taiga-ui/cdk/directives/visual-viewport';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiAlerts} from '@taiga-ui/core/components/alert';
import {TuiDialogs} from '@taiga-ui/core/components/dialog';
import {
    TUI_SCROLLBAR_OPTIONS,
    TuiScrollControls,
} from '@taiga-ui/core/components/scrollbar';
import {TuiDropdowns} from '@taiga-ui/core/directives/dropdown';
import {TuiHints} from '@taiga-ui/core/directives/hint';
import {TuiPopups} from '@taiga-ui/core/directives/popup';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_REDUCED_MOTION, TUI_THEME} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils';
import {PreventEventPlugin} from '@taiga-ui/event-plugins';
import {map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-root',
    imports: [
        NgIf,
        TuiAlerts,
        TuiDialogs,
        TuiDropdowns,
        TuiHints,
        TuiPopups,
        TuiScrollControls,
    ],
    templateUrl: './root.template.html',
    styleUrls: ['./root.style.less'],
    encapsulation: ViewEncapsulation.None,
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-duration.ms]': 'duration',
        '[style.--tui-scroll-behavior]': 'reducedMotion ? "auto" : "smooth"',
        '[class._mobile]': 'isMobileRes()',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        '(touchstart.passive.zoneless)': '0',
        '(document:fullscreenchange)': 'top.set(isTopLayer())',
    },
})
export class TuiRoot {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    protected readonly reducedMotion = inject(TUI_REDUCED_MOTION);
    protected readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    protected readonly isChildRoot = !!inject(TuiRoot, {optional: true, skipSelf: true});
    protected readonly top = signal(!this.isChildRoot);
    protected readonly isMobileRes = toSignal(
        inject(TuiBreakpointService).pipe(
            map((breakpoint) => breakpoint === 'mobile'),
            tuiWatch(),
        ),
        {initialValue: false},
    );

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';

    protected readonly scrollbars =
        !this.nativeScrollbar && !inject(TUI_IS_MOBILE) && !this.isChildRoot;

    constructor() {
        if (!this.top()) {
            return;
        }

        this.doc.documentElement.setAttribute(
            'data-tui-theme',
            inject(TUI_THEME).toLowerCase(),
        );

        if (!this.nativeScrollbar) {
            this.doc.defaultView?.document.documentElement.classList.add(
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

    protected isTopLayer(): boolean {
        return this.doc.fullscreenElement
            ? this.doc.fullscreenElement === this.el
            : !this.isChildRoot;
    }
}
