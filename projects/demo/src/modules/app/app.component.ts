import {APP_BASE_HREF, DOCUMENT} from '@angular/common';
import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {distinctUntilChanged, filter, map, takeUntil} from 'rxjs';

import {AbstractDemoComponent, DEMO_PAGE_LOADED_PROVIDER} from './abstract.app';
import {YaMetrikaService} from './metrika/metrika.service';
import {TUI_VERSION_MANAGER_PROVIDERS} from './version-manager/version-manager.providers';

@Component({
    selector: 'app',
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
    private readonly doc = inject(DOCUMENT);
    private readonly appBaseHref = inject(APP_BASE_HREF);
    private readonly ym = inject(YaMetrikaService);
    protected readonly router = inject(Router);
    protected readonly storage = inject(LOCAL_STORAGE);

    readonly isLanding$ = this.router.events.pipe(
        map(() => this.router.routerState.snapshot.url === '/'),
        distinctUntilChanged(),
    );

    override async ngOnInit(): Promise<void> {
        await super.ngOnInit();
        this.enableYandexMetrika();
        this.setBaseHrefIfNotPresent();
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

    /**
     * @description:
     * By default, on webcontainer.io will not be provided base[href] in index.html,
     * we use fallback for correct processing of routing
     */
    private setBaseHrefIfNotPresent(): void {
        if (this.doc.getElementsByTagName('base')?.[0]?.href) {
            return;
        }

        const base = this.doc.createElement('base');

        base.href = this.appBaseHref;
        this.doc.getElementsByTagName('head')?.[0]?.appendChild(base);
    }
}
