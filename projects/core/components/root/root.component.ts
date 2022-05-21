import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {TUI_DIALOGS, TUI_IS_MOBILE, tuiAssert, tuiPure} from '@taiga-ui/cdk';
import {VERSION} from '@taiga-ui/core/constants';
import {TUI_IS_MOBILE_RES_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_ASSERT_ENABLED,
    TUI_DISABLE_CUSTOM_SCROLLBAR,
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
    @tuiPure
    get isScrollbarShown$(): Observable<boolean> {
        if (this.isMobile || this.customScrollbarDisabled) {
            return of(false);
        }

        if (!this.dialogs.length) {
            return of(true);
        }

        return merge(...this.dialogs).pipe(map(({length}) => !length));
    }

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
        @Inject(TUI_DISABLE_CUSTOM_SCROLLBAR)
        private readonly customScrollbarDisabled: boolean,
    ) {
        tuiAssert.enabled = enabled;
        body.setAttribute('data-tui-theme', theme.toLowerCase());
        this.switchScrollbars(body);
    }

    /**
     * Switches between native and custom scrollbars.
     * If TUI_DISABLE_CUSTOM_SCROLLBAR is false, adds a class to disable a native scrollbar.
     * If TUI_DISABLE_CUSTOM_SCROLLBAR is true, removes a class that disables a native scrollbar.
     */
    private switchScrollbars(body: HTMLElement): void {
        const cssClass = 'tui-zero-scrollbar';

        this.customScrollbarDisabled
            ? body.classList.remove(cssClass)
            : body.classList.add(cssClass);
    }
}
