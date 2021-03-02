import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Optional,
} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {TUI_IS_ANDROID, TUI_IS_IOS, TuiFocusVisibleService} from '@taiga-ui/cdk';
import {TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {TUI_MOBILE_AWARE} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {TUI_TAB_EVENT, TUI_TAB_PROVIDERS} from './tab.providers';

@Component({
    selector: `a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]`,
    templateUrl: './tab.template.html',
    styleUrls: ['./tab.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TAB_PROVIDERS,
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiTabComponent {
    @HostBinding('class._ios')
    readonly isIos: boolean;

    @HostBinding('class._android')
    readonly isAndroid: boolean;

    @HostBinding('class._focus-visible')
    focusVisible = false;

    constructor(
        @Optional()
        @Inject(RouterLinkActive)
        private readonly routerLinkActive: RouterLinkActive | null,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_MOBILE_AWARE) mobileAware: boolean,
        @Inject(TUI_IS_IOS) isIos: boolean,
        @Inject(TUI_IS_ANDROID) isAndroid: boolean,
        @Inject(TUI_TAB_EVENT) event$: Observable<Event>,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
    ) {
        this.isIos = mobileAware && isIos;
        this.isAndroid = mobileAware && isAndroid;

        event$.subscribe(event => {
            nativeElement.dispatchEvent(event);
        });
        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    @HostBinding('class._active')
    get isActive(): boolean {
        return !!this.routerLinkActive && this.routerLinkActive.isActive;
    }
}
