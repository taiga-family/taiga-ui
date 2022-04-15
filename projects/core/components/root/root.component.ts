import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {TUI_DIALOGS, TUI_IS_MOBILE, tuiAssert} from '@taiga-ui/cdk';
import {VERSION} from '@taiga-ui/core/constants';
import {TUI_IS_MOBILE_RES_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_ASSERT_ENABLED,
    TUI_IS_MOBILE_RES,
    TUI_THEME,
} from '@taiga-ui/core/tokens';
import {merge, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

// @dynamic
@Component({
    selector: 'tui-root',
    templateUrl: 'root.template.html',
    styleUrls: ['./root.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_IS_MOBILE_RES_PROVIDER],
    host: {
        'data-tui-version': VERSION,
        '[style.--tui-duration]': 'duration + "ms"',
        '($.class._mobile)': 'isMobileRes$',
    },
})
export class TuiRootComponent {
    readonly scrollbars$: Observable<boolean> =
        this.dialogs.length && !this.isMobile
            ? merge(...this.dialogs).pipe(map(({length}) => !length))
            : of(!this.isMobile);

    constructor(
        @Inject(TUI_ANIMATIONS_DURATION) readonly duration: number,
        @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_DIALOGS)
        readonly dialogs: ReadonlyArray<Observable<readonly unknown[]>>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_ASSERT_ENABLED) enabled: boolean,
        @Inject(TUI_IS_MOBILE_RES) readonly isMobileRes$: Observable<boolean>,
        @Inject(DOCUMENT) {body}: Document,
        @Inject(TUI_THEME) theme: string,
    ) {
        tuiAssert.enabled = enabled;
        body.setAttribute('data-tui-theme', theme.toLowerCase());
        this.unsetMobileOverflowStateForDesktop(body);
    }

    /**
     * @note:
     * By default, the mobile browser takes the static overflow (auto) state
     * and then, there are no problems with recalculating the layout in iOS.
     * However, for the desktop version, we need to remove this state.
     *
     * One of the problems is that if we dynamically add state
     * for the mobile version, it won't work.
     * Apparently in iOS you need a static state from CSS declarations.
     */
    private unsetMobileOverflowStateForDesktop(body: HTMLElement): void {
        if (!this.isMobile && getComputedStyle(body).overflow === 'auto') {
            body.style.overflow = 'initial';
        }
    }
}
