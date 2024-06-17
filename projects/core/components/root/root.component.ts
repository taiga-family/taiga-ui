import {AsyncPipe, DOCUMENT, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    TUI_IS_ANDROID,
    TUI_IS_IOS,
    TUI_IS_MOBILE,
    TUI_VERSION,
    tuiWatch,
} from '@taiga-ui/cdk';
import {TuiAlertsComponent} from '@taiga-ui/core/components/alert';
import {TUI_DIALOGS, TuiDialogsComponent} from '@taiga-ui/core/components/dialog';
import {TuiScrollControlsComponent} from '@taiga-ui/core/components/scrollbar';
import {TuiDropdownsComponent} from '@taiga-ui/core/directives';
import {TuiHintsComponent} from '@taiga-ui/core/directives/hint';
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
        TuiDropdownsComponent,
        TuiDialogsComponent,
        TuiAlertsComponent,
        TuiHintsComponent,
        TuiScrollControlsComponent,
    ],
    templateUrl: './root.template.html',
    styleUrls: ['./root.style.less'],
    encapsulation: ViewEncapsulation.None,
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-duration.ms]': 'duration',
        '[class._ios]': 'isIOS',
        '[class._android]': 'isAndroid',
        '[class._reduced-motion]': 'reducedMotion',
        '[class._mobile]': 'isMobileRes()',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        '(touchstart.passive.silent)': '0',
    },
})
export class TuiRoot {
    private readonly dialogs$ = inject<Observable<readonly unknown[]>>(TUI_DIALOGS);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly breakpoint = inject(TuiBreakpointService);

    protected readonly isIOS = inject(TUI_IS_IOS);
    protected readonly isAndroid = inject(TUI_IS_ANDROID);
    protected readonly reducedMotion = inject(TUI_REDUCED_MOTION);
    protected readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));

    protected readonly isMobileRes = toSignal(
        this.breakpoint.pipe(
            map(breakpoint => breakpoint === 'mobile'),
            tuiWatch(inject(ChangeDetectorRef)),
        ),
    );

    protected readonly scrollbars$: Observable<boolean> = this.isMobile
        ? of(false)
        : this.dialogs$.pipe(
              map(dialogs => !dialogs.length),
              debounceTime(0),
          );

    constructor() {
        inject(DOCUMENT).defaultView?.document.documentElement.setAttribute(
            'data-tui-theme',
            inject(TUI_THEME).toLowerCase(),
        );
    }
}
