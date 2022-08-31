import {Component, Inject, InjectFlags, Injector, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {
    TUI_IS_ANDROID,
    TUI_IS_CYPRESS,
    TUI_IS_IOS,
    TuiDestroyService,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {Metrika} from 'ng-yandex-metrika';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, takeUntil} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {AbstractDemoComponent, DEMO_PAGE_LOADED_PROVIDER} from './abstract.app';
import {
    SELECTED_VERSION_META,
    VERSION_MANAGER_PROVIDERS,
} from './version-manager/version-manager.providers';
import {TuiVersionMeta} from './version-manager/versions.constants';

@Component({
    selector: `app`,
    templateUrl: `./app.template.html`,
    styleUrls: [`./app.style.less`],
    providers: [
        TuiDestroyService,
        TuiResizeService,
        DEMO_PAGE_LOADED_PROVIDER,
        VERSION_MANAGER_PROVIDERS,
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class AppComponent extends AbstractDemoComponent {
    readonly isLanding$ = this.router.events.pipe(
        map(() => this.router.routerState.snapshot.url === `/`),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_IS_CYPRESS) isCypress: boolean,
        @Inject(TUI_DOC_PAGE_LOADED) pageLoaded$: Observable<boolean>,
        @Inject(SELECTED_VERSION_META) versionMeta: TuiVersionMeta,
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
        @Inject(Router) protected readonly router: Router,
        @Inject(LOCAL_STORAGE) protected readonly storage: Storage,
        @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(Injector) private readonly injector: Injector,
    ) {
        super(isCypress, pageLoaded$, versionMeta);
    }

    async ngOnInit(): Promise<void> {
        await super.ngOnInit();
        this.enableYandexMetrika();
    }

    private enableYandexMetrika(): void {
        if (!environment.production || this.isCypress) {
            console.info(`Yandex.Metrika disabled for non-production mode.`);

            return;
        }

        try {
            const metrika = this.injector.get(Metrika, null, InjectFlags.Optional);

            this.router.events
                .pipe(
                    filter(
                        (event): event is NavigationEnd => event instanceof NavigationEnd,
                    ),
                    takeUntil(this.destroy$),
                )
                .subscribe(event => {
                    // eslint-disable-next-line
                    metrika?.hit(event.urlAfterRedirects, {referer: event.url});
                });
        } catch {
            console.error(`You forgot to import MetrikaModule!`);
        }
    }
}
