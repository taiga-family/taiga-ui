import {Component, inject} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {filter, map, shareReplay, takeUntil} from 'rxjs';

@Component({
    selector: 'routable-dialog',
    templateUrl: './routable-dialog.template.html',
    changeDetection,
    providers: [TuiDestroyService],
})
export class RoutableDialogComponent {
    protected readonly example1: TuiDocExample = {
        'page.template.html': import('./examples/1/page-1.component.html?raw'),
        'page.module.ts': import('./examples/1/page-1.module.ts?raw'),
        'dialog-content.component.ts': import(
            './examples/1/dialog-content.component.ts?raw'
        ),
    };

    protected readonly example2: TuiDocExample = {
        'page.template.html': import('./examples/2/page-2.component.html?raw'),
        'page.module.ts': import('./examples/2/page-2.module.ts?raw'),
        'dialog-content.component.ts': import(
            './examples/2/dialog-content.component.ts?raw'
        ),
    };

    protected readonly addRouterOutlet = import(
        './examples/setup/add-router-outlet.md?raw'
    );

    protected readonly importModule = import('./examples/setup/import-module.md?raw');
    protected readonly useRouteGenerator = import(
        './examples/setup/use-route-generator.md?raw'
    );

    /**
     * Helps to destroy router-outlet for named outlet example
     */
    protected readonly isNamedOutletPage$ = inject(Router).events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(event => event.url.includes('NamedOutlet')),
        shareReplay({refCount: true, bufferSize: 1}),
    );

    constructor() {
        this.isNamedOutletPage$
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe();
    }
}
