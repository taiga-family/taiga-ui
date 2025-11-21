import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiFontSize} from '@taiga-ui/cdk/directives/font-size';
import {TuiPlatform} from '@taiga-ui/cdk/directives/platform';
import {TuiVisualViewport} from '@taiga-ui/cdk/directives/visual-viewport';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    TUI_SCROLLBAR_OPTIONS,
    TuiScrollControls,
} from '@taiga-ui/core/components/scrollbar';
import {TuiPopups} from '@taiga-ui/core/portals/popup';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_REDUCED_MOTION} from '@taiga-ui/core/tokens';
import {TUI_OPTIONS, tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';

@Component({
    selector: 'tui-root',
    imports: [TuiPopups, TuiScrollControls],
    templateUrl: './root.template.html',
    styleUrls: ['./animations.less', './root.style.less'],
    encapsulation: ViewEncapsulation.None,
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-duration.ms]': 'duration',
        '[style.--tui-scroll-behavior]': 'reducedMotion ? "auto" : "smooth"',
        '[class._mobile]': 'breakpoint() === "mobile"',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        '(touchstart.passive.zoneless)': '0',
        '(document:fullscreenchange)': 'top.set(parent)',
    },
})
export class TuiRoot {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly child = !!inject(TuiRoot, {optional: true, skipSelf: true});

    protected readonly reducedMotion = inject(TUI_REDUCED_MOTION);
    protected readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    protected readonly top = signal(this.parent);
    protected readonly breakpoint = toSignal(inject(TuiBreakpointService));

    protected readonly scrollbars =
        !inject(TUI_IS_MOBILE) &&
        !this.child &&
        inject(TUI_SCROLLBAR_OPTIONS).mode !== 'native' &&
        inject(TUI_OPTIONS).scrollbars !== 'native';

    protected get parent(): boolean {
        return this.doc.fullscreenElement === this.el || !this.child;
    }
}
