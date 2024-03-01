import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    OnDestroy,
} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {tuiIsNativeFocused} from '@taiga-ui/cdk';
import {TUI_MODE} from '@taiga-ui/core';
import {TUI_TAB_MARGIN} from '@taiga-ui/kit/tokens';

import {TUI_TAB_EVENT, TUI_TAB_PROVIDERS} from './tab.providers';

@Component({
    selector:
        'a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]',
    templateUrl: './tab.template.html',
    styleUrls: ['./tab.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TAB_PROVIDERS,
    host: {
        '($.data-mode.attr)': 'mode$',
        /**
         * SSR hack - problem with the Domino renderer that Angular uses for its server-side DOM implementation.
         * Domino doesn't support CSS variables and some CSS properties like clip-path.
         * Read more: https://github.com/taiga-family/taiga-ui/issues/3210#issuecomment-1375788017
         * ___
         * TODO: drop this line after Angular 16
         */
        '[style.cursor]': '"pointer"',
        '[style.--tui-tab-margin.px]': 'margin',
        type: 'button',
    },
})
export class TuiTabComponent implements OnDestroy {
    private readonly routerLinkActive = inject(RouterLinkActive, {optional: true});
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    protected readonly mode$ = inject(TUI_MODE);
    protected readonly event$ = inject(TUI_TAB_EVENT);
    protected readonly margin = inject(TUI_TAB_MARGIN);

    public ngOnDestroy(): void {
        if (tuiIsNativeFocused(this.el)) {
            this.el.blur();
        }
    }

    @HostBinding('class._active')
    protected get isActive(): boolean {
        return !!this.routerLinkActive?.isActive;
    }
}
