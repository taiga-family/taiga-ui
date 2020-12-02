import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Optional,
} from '@angular/core';
import {EVENT_MANAGER_PLUGINS} from '@angular/platform-browser';
import {CSS, USER_AGENT} from '@ng-web-apis/common';
import {
    isFirefox,
    TUI_DIALOGS,
    TUI_IS_MOBILE,
    tuiAssert,
    TuiDestroyService,
} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {VERSION} from '@taiga-ui/core/constants';
import {TuiNotificationsHostComponent} from '@taiga-ui/core/modules/notifications';
import {TuiRootScroller} from '@taiga-ui/core/services';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {SilentEventPlugin} from '@tinkoff/ng-event-plugins';
import {merge, Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-root',
    templateUrl: 'root.template.html',
    styleUrls: ['./root.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': VERSION,
    },
    providers: [
        TuiDestroyService,
        {
            provide: TUI_SCROLL_REF,
            useExisting: ElementRef,
        },
    ],
    animations: [tuiFadeIn],
})
export class TuiRootComponent {
    private isDialogPresent = false;
    private isLegacy =
        !this.cssRef.supports('position', 'sticky') ||
        (isFirefox(this.userAgent) && !this.cssRef.supports('scrollbar-width', 'none'));

    constructor(
        /**
         * TODO: remove "any" in new TS version; https://github.com/ng-web-apis/common/pull/6
         */
        @Inject(CSS) private readonly cssRef: any,
        @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Optional()
        @Inject(TUI_DIALOGS)
        readonly dialogs: ReadonlyArray<Observable<ReadonlyArray<unknown>>> | null,
        @Optional()
        @Inject(TuiNotificationsHostComponent)
        readonly notificationsHost: TuiNotificationsHostComponent,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TuiRootScroller) scroller: TuiRootScroller,
        @Inject(EVENT_MANAGER_PLUGINS) plugins: ReadonlyArray<unknown>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {
        tuiAssert.bootstrapped = true;

        scroller.register(this);

        tuiAssert.assert(
            !(plugins[0] instanceof SilentEventPlugin),
            'PlatformBrowser or PlatformServer modules must come before TuiRootModule in your main module',
        );

        if (!dialogs) {
            return;
        }

        merge(...dialogs)
            .pipe(
                map(({length}) => !!length),
                takeUntil(destroy$),
            )
            .subscribe(isDialogPresent => {
                this.isDialogPresent = isDialogPresent;
            });
    }

    get showScrollbar(): boolean {
        return !this.isDialogPresent && !this.isMobile && !this.isLegacy;
    }
}
