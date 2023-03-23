import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'lazy-routable-dialog',
    templateUrl: './lazy-routable-dialog.template.html',
    changeDetection,
})
export class LazyRoutableDialogComponent {
    readonly example1: TuiDocExample = {
        'page.template.html': import('./examples/1/page-1.component.html?raw'),
        'page.module.ts': import('./examples/1/page-1.module.ts?raw'),
        'dialog-content.component.ts': import(
            './examples/1/dialog-content/dialog-content.component.ts?raw'
        ),
        'dialog-content.module.ts': import(
            './examples/1/dialog-content/dialog-content.module.ts?raw'
        ),
    };

    readonly addRouterOutlet = import('./examples/setup/add-router-outlet.md?raw');
    readonly importModule = import('./examples/setup/import-module.md?raw');
    readonly useRouteGenerator = import('./examples/setup/use-route-generator.md?raw');
    readonly addLazyLoadedModule = import(
        './examples/setup/add-lazy-loaded-module.md?raw'
    );
}
