import {isPlatformServer} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import type {OnInit} from '@angular/core';
import {
    Component,
    DestroyRef,
    inject,
    PLATFORM_ID,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {environment} from '@demo/environments/environment';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_DOC_SEARCH_ENABLED} from '@taiga-ui/addon-doc';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiBadgedContent} from '@taiga-ui/kit';
import {TuiSheetModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

import {CustomHost} from '../customization/portals/examples/1/portal';
import {AbstractDemo, DEMO_PAGE_LOADED_PROVIDER} from './abstract.app';
import {YaMetrikaService} from './metrika/metrika.service';
import {TuiAlgoliaSearch} from './search';
import {VersionManager} from './version-manager/version-manager.component';
import {TUI_VERSION_MANAGER_PROVIDERS} from './version-manager/version-manager.providers';

@Component({
    standalone: true,
    selector: 'app',
    imports: [
        CustomHost,
        HttpClientModule,
        TuiAlgoliaSearch,
        TuiBadgedContent,
        TuiButton,
        TuiDataList,
        TuiDemo,
        TuiDropdown,
        TuiIcon,
        TuiSheetModule,
        TuiTextfieldControllerModule,
        VersionManager,
    ],
    templateUrl: './app.template.html',
    styleUrls: ['./app.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [
        ResizeObserverService,
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
    private readonly isE2E = inject(TUI_IS_E2E);
    private readonly isServer = isPlatformServer(inject(PLATFORM_ID));
    private readonly destroyRef = inject(DestroyRef);
    private readonly http = inject(HttpClient);
    private readonly ym = inject(YaMetrikaService);
    protected readonly router = inject(Router);
    protected readonly storage = inject(WA_LOCAL_STORAGE);
    protected readonly routes = DemoRoute;
    protected readonly stars = signal('');
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

    public override async ngOnInit(): Promise<void> {
        await super.ngOnInit();

        if (this.isServer || this.isE2E) {
            return;
        }

        this.enableYandexMetrika();

        this.http
            .get<Record<string, any>>(environment.github)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((response) =>
                this.stars.set(
                    Intl.NumberFormat('en', {notation: 'compact'}).format(
                        response['stargazers_count'],
                    ),
                ),
            );
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
