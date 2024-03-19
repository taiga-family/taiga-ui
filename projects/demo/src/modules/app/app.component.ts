import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiDocMainModule, TuiLanguageSwitcherComponent} from '@taiga-ui/addon-doc';
import {TuiSheetModule} from '@taiga-ui/addon-mobile';
import {TuiTableBarsHostModule} from '@taiga-ui/addon-tablebars';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiLinkModule, TuiModeModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {distinctUntilChanged, filter, map, takeUntil} from 'rxjs';

import {CustomHostComponent} from '../customization/portals/examples/1/portal/custom-host.component';
import {AbstractDemoComponent, DEMO_PAGE_LOADED_PROVIDER} from './abstract.app';
import {YaMetrikaService} from './metrika/metrika.service';
import {VersionManagerModule} from './version-manager/version-manager.module';
import {TUI_VERSION_MANAGER_PROVIDERS} from './version-manager/version-manager.providers';

@Component({
    standalone: true,
    selector: 'app',
    imports: [
        RouterOutlet,
        AsyncPipe,
        TuiDocMainModule,
        NgIf,
        TuiLinkModule,
        TuiModeModule,
        RouterLink,
        TuiLanguageSwitcherComponent,
        VersionManagerModule,
        TuiSheetModule,
        CustomHostComponent,
        TuiTableBarsHostModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './app.template.html',
    styleUrls: ['./app.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [
        ResizeObserverService,
        TuiDestroyService,
        DEMO_PAGE_LOADED_PROVIDER,
        TUI_VERSION_MANAGER_PROVIDERS,
    ],
})
export class AppComponent extends AbstractDemoComponent implements OnInit {
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly ym = inject(YaMetrikaService);
    protected readonly router = inject(Router);
    protected readonly storage = inject(LOCAL_STORAGE);

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
                takeUntil(this.destroy$),
            )
            .subscribe(event =>
                this.ym.hit(event.urlAfterRedirects, {referer: event.url}),
            );
    }
}
