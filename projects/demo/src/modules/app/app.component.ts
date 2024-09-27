import type {OnInit} from '@angular/core';
import {Component, DestroyRef, inject, ViewEncapsulation} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
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
        TuiAlgoliaSearch,
        TuiButton,
        TuiDataList,
        TuiDemo,
        TuiDropdown,
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
    private readonly destroyRef = inject(DestroyRef);
    private readonly ym = inject(YaMetrikaService);
    protected readonly router = inject(Router);
    protected readonly storage = inject(WA_LOCAL_STORAGE);
    protected readonly routes = DemoRoute;

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
        this.enableYandexMetrika();
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
