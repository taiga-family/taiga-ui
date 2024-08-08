import {AsyncPipe, DOCUMENT, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiPlatform} from '@taiga-ui/cdk/directives/platform';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiAlerts} from '@taiga-ui/core/components/alert';
import {TUI_DIALOGS, TuiDialogs} from '@taiga-ui/core/components/dialog';
import {TuiScrollControls} from '@taiga-ui/core/components/scrollbar';
import {TuiDropdowns} from '@taiga-ui/core/directives';
import {TuiHints} from '@taiga-ui/core/directives/hint';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_REDUCED_MOTION, TUI_THEME} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils';
import type {Observable} from 'rxjs';
import {debounceTime, map, of} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-root',
    imports: [
        NgIf,
        AsyncPipe,
        TuiDropdowns,
        TuiDialogs,
        TuiAlerts,
        TuiHints,
        TuiScrollControls,
    ],
    templateUrl: './root.template.html',
    styleUrls: ['./root.style.less'],
    encapsulation: ViewEncapsulation.None,
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    hostDirectives: [TuiPlatform],
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-duration.ms]': 'duration',
        '[style.--tui-scroll-behavior]': 'reducedMotion ? "auto" : "smooth"',
        '[class._mobile]': 'isMobileRes()',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        '(touchstart.passive.silent)': '0',
    },
})
export class TuiRoot {
    protected readonly reducedMotion = inject(TUI_REDUCED_MOTION);
    protected readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));

    protected readonly isMobileRes = toSignal(
        inject(TuiBreakpointService).pipe(
            map((breakpoint) => breakpoint === 'mobile'),
            tuiWatch(inject(ChangeDetectorRef)),
        ),
    );

    protected readonly scrollbars$: Observable<boolean> = inject(TUI_IS_MOBILE)
        ? of(false)
        : inject<Observable<readonly unknown[]>>(TUI_DIALOGS).pipe(
              map(({length}) => !length),
              debounceTime(0),
          );

    constructor() {
        inject(DOCUMENT).defaultView?.document.documentElement.setAttribute(
            'data-tui-theme',
            inject(TUI_THEME).toLowerCase(),
        );
    }
}
