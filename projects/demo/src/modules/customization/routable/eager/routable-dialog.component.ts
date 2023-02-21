import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'routable-dialog',
    templateUrl: './routable-dialog.template.html',
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

    readonly addRouterOutlet = import('./examples/setup/add-router-outlet.md?raw');
    readonly importModule = import('./examples/setup/import-module.md?raw');
    readonly useRouteGenerator = import('./examples/setup/use-route-generator.md?raw');
}
