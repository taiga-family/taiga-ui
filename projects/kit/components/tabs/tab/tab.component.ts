import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    OnDestroy,
    Optional,
} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {TuiFocusVisibleService, tuiIsNativeFocused} from '@taiga-ui/cdk';
import {TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {TUI_TAB_MARGIN} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

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
         * Read more: https://github.com/Tinkoff/taiga-ui/issues/3210#issuecomment-1375788017
         * ___
         * TODO: drop this line after Angular team switch over to a new JavaScript DOM API
         * https://github.com/angular/angular/issues/42170
         */
        '[style.cursor]': '"pointer"',
        '[style.--tui-tab-margin.px]': 'margin',
        type: 'button',
    },
})
export class TuiTabComponent implements OnDestroy {
    @HostBinding('class._focus-visible')
    focusVisible = false;

    constructor(
        @Optional()
        @Inject(RouterLinkActive)
        private readonly routerLinkActive: RouterLinkActive | null,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_TAB_EVENT) readonly event$: Observable<Event>,
        @Inject(TUI_TAB_MARGIN) readonly margin: number,
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
    ) {
        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    @HostBinding('class._active')
    get isActive(): boolean {
        return !!this.routerLinkActive && this.routerLinkActive.isActive;
    }

    ngOnDestroy(): void {
        if (tuiIsNativeFocused(this.el.nativeElement)) {
            this.el.nativeElement.blur();
        }
    }
}
