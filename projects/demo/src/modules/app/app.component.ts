import {isPlatformServer} from '@angular/common';
import {
    Component,
    DestroyRef,
    inject,
    type OnInit,
    PLATFORM_ID,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {environment} from '@demo/environments/environment';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_DOC_SEARCH_ENABLED} from '@taiga-ui/addon-doc';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

import {CustomHost} from '../customization/portals/examples/1/portal';
import {AbstractDemo, DEMO_PAGE_LOADED_PROVIDER} from './abstract.app';
import {YaMetrikaService} from './metrika/metrika.service';
import {TuiAlgoliaSearch} from './search';
import {TUI_VERSION_MANAGER_PROVIDERS} from './version-manager/version-manager.providers';

@Component({
    selector: 'app',
    imports: [CustomHost, TuiAlgoliaSearch, TuiButton, TuiDataList, TuiDemo, TuiDropdown],
    templateUrl: './app.template.html',
    styleUrl: './app.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [
        WaResizeObserverService,
        DEMO_PAGE_LOADED_PROVIDER,
        TUI_VERSION_MANAGER_PROVIDERS,
        {
            provide: 'Pythons',
            useValue: [
                'John Cleese',
                'Eric Idle',
                'Michael Palin',
                'Graham Chapman',
                'Terry Gilliam',
                'Terry Jones',
            ],
        },
    ],
})
export class App extends AbstractDemo implements OnInit {
    private readonly isE2E = inject(WA_IS_E2E);
    private readonly isServer = isPlatformServer(inject(PLATFORM_ID));
    private readonly destroyRef = inject(DestroyRef);
    private readonly ym = inject(YaMetrikaService);
    protected readonly router = inject(Router);
    protected readonly storage = inject(WA_LOCAL_STORAGE);
    protected readonly routes = DemoRoute;
    protected readonly defaultSearchEnabled = inject(TUI_DOC_SEARCH_ENABLED);

    protected readonly isLanding = toSignal(
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.url === '' || this.url === '/'),
            distinctUntilChanged(),
            startWith(true),
        ),
        {initialValue: true},
    );

    public override ngOnInit(): void {
        this.replaceEnvInURI().then(() => {
            if (this.isServer || this.isE2E || !environment.production) {
                return;
            }

            this.enableYandexMetrika();
        });
    }

    private enableYandexMetrika(): void {
        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((event) =>
                this.ym.hit(event.urlAfterRedirects, {referer: event.url}),
            );
    }
}
