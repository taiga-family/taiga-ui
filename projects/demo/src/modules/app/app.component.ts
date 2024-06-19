import type {OnInit} from '@angular/core';
import {Component, DestroyRef, inject, ViewEncapsulation} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiLanguageSwitcherComponent} from '@taiga-ui/addon-doc';
import {TuiSheetModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {distinctUntilChanged, filter, map} from 'rxjs';

import {CustomHostComponent} from '../customization/portals/examples/1/portal/custom-host.component';
import {AbstractDemoComponent, DEMO_PAGE_LOADED_PROVIDER} from './abstract.app';
import {YaMetrikaService} from './metrika/metrika.service';
import {VersionManagerComponent} from './version-manager/version-manager.component';
import {TUI_VERSION_MANAGER_PROVIDERS} from './version-manager/version-manager.providers';

@Component({
    standalone: true,
    selector: 'app',
    imports: [
        TuiDemo,
        TuiLanguageSwitcherComponent,
        VersionManagerComponent,
        CustomHostComponent,
        TuiTextfieldControllerModule,
        TuiSheetModule,
    ],
    templateUrl: './app.template.html',
    styleUrls: ['./app.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [
        ResizeObserverService,
        DEMO_PAGE_LOADED_PROVIDER,
        TUI_VERSION_MANAGER_PROVIDERS,
    ],
})
export class AppComponent extends AbstractDemoComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly ym = inject(YaMetrikaService);
    protected readonly router = inject(Router);
    protected readonly storage = inject(LOCAL_STORAGE);
    protected readonly routes = DemoRoute;

    protected readonly isLanding$ = this.router.events.pipe(
        map(() => this.router.routerState.snapshot.url === '/'),
        distinctUntilChanged(),
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
            .subscribe(event =>
                this.ym.hit(event.urlAfterRedirects, {referer: event.url}),
            );
    }
}
