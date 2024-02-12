import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS, TUI_IS_MOBILE, TUI_VERSION} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core/components/dialog';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_REDUCED_MOTION, TUI_THEME} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils';
import {debounceTime, map, Observable, of} from 'rxjs';

@Component({
    selector: 'tui-root',
    templateUrl: './root.template.html',
    styleUrls: ['./root.style.less'],
    encapsulation: ViewEncapsulation.None,
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-duration.ms]': 'duration',
        '[class._ios]': 'isIOS',
        '[class._android]': 'isAndroid',
        '[class._reduced-motion]': 'reducedMotion',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        '(touchstart.passive.silent)': '0',
        '[$.class._mobile]': 'isMobileRes$',
        '($.class._mobile)': 'isMobileRes$',
    },
})
export class TuiRootComponent {
    readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));

    readonly isMobileRes$ = this.breakpoint.pipe(
        map(breakpoint => breakpoint === 'mobile'),
    );

    readonly scrollbars$: Observable<boolean> = this.isMobile
        ? of(false)
        : this.dialogs$.pipe(
              map(dialogs => !dialogs.length),
              debounceTime(0),
          );

    constructor(
        @Inject(TUI_REDUCED_MOTION) readonly reducedMotion: boolean,
        @Inject(TUI_DIALOGS) private readonly dialogs$: Observable<readonly unknown[]>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TuiBreakpointService) private readonly breakpoint: TuiBreakpointService,
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(DOCUMENT) document: Document,
        @Inject(TUI_THEME) theme: string,
    ) {
        document.defaultView?.document.documentElement.setAttribute(
            'data-tui-theme',
            theme.toLowerCase(),
        );
    }
}
