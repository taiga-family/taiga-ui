import {Component, Inject, Self} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {filter, map, shareReplay, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'routable-dialog',
    templateUrl: './routable-dialog.template.html',
    providers: [TuiDestroyService],
    changeDetection,
})
export class RoutableDialogComponent {
    readonly example1: TuiDocExample = {
        'page.template.html': import('./examples/1/page-1.component.html?raw'),
        'page.module.ts': import('./examples/1/page-1.module.ts?raw'),
        'dialog-content.component.ts': import(
            './examples/1/dialog-content.component.ts?raw'
        ),
    };

    readonly example2: TuiDocExample = {
        'page.template.html': import('./examples/2/page-2.component.html?raw'),
        'page.module.ts': import('./examples/2/page-2.module.ts?raw'),
        'dialog-content.component.ts': import(
            './examples/2/dialog-content.component.ts?raw'
        ),
    };

    readonly addRouterOutlet = import('./examples/setup/add-router-outlet.md?raw');
    readonly importModule = import('./examples/setup/import-module.md?raw');
    readonly useRouteGenerator = import('./examples/setup/use-route-generator.md?raw');

    /**
     * Helps to destroy router-outlet for named outlet example
     */
    readonly isNamedOutletPage$ = this.router.events.pipe(
        filter(isNavigationEndEvent),
        map(event => event.url.includes('NamedOutlet')),
        shareReplay({refCount: true, bufferSize: 1}),
    );

    constructor(
        @Inject(Router) private readonly router: Router,
        @Inject(TuiDestroyService) @Self() destroy$: TuiDestroyService,
    ) {
        this.isNamedOutletPage$.pipe(takeUntil(destroy$)).subscribe();
    }
}

function isNavigationEndEvent<T>(event: Event | T): event is NavigationEnd {
    return event instanceof NavigationEnd;
}
