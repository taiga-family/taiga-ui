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
import {
    isNativeFocused,
    setNativeFocused,
    TUI_IS_ANDROID,
    TUI_IS_IOS,
    TuiFocusVisibleService,
} from '@taiga-ui/cdk';
import {TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {TUI_MOBILE_AWARE, TUI_TAB_MARGIN} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

import {TUI_TAB_EVENT, TUI_TAB_PROVIDERS} from './tab.providers';

@Component({
    selector: `a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]`,
    templateUrl: `./tab.template.html`,
    styleUrls: [`./tab.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TAB_PROVIDERS,
    host: {
        '($.data-mode.attr)': `mode$`,
        '[style.--tui-tab-margin.px]': `margin`,
        type: `button`,
    },
})
export class TuiTabComponent implements OnDestroy {
    @HostBinding(`class._ios`)
    readonly isIos: boolean;

    @HostBinding(`class._android`)
    readonly isAndroid: boolean;

    @HostBinding(`class._focus-visible`)
    focusVisible = false;

    constructor(
        @Optional()
        @Inject(RouterLinkActive)
        private readonly routerLinkActive: RouterLinkActive | null,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_TAB_EVENT) readonly event$: Observable<Event>,
        @Inject(TUI_TAB_MARGIN) readonly margin: number,
        @Inject(TUI_MOBILE_AWARE) mobileAware: boolean,
        @Inject(TUI_IS_IOS) isIos: boolean,
        @Inject(TUI_IS_ANDROID) isAndroid: boolean,
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
    ) {
        this.isIos = mobileAware && isIos;
        this.isAndroid = mobileAware && isAndroid;

        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    @HostBinding(`class._active`)
    get isActive(): boolean {
        return !!this.routerLinkActive && this.routerLinkActive.isActive;
    }

    ngOnDestroy(): void {
        if (isNativeFocused(this.elementRef.nativeElement)) {
            setNativeFocused(this.elementRef.nativeElement, false);
        }
    }
}
