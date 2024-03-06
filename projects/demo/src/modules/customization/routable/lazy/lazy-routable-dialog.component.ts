import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocCodeModule,
    type TuiDocExample,
    TuiDocExampleModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'lazy-routable-dialog',
    imports: [TuiDocPageModule, TuiDocExampleModule, RouterOutlet, TuiDocCodeModule],
    templateUrl: './lazy-routable-dialog.template.html',
    changeDetection,
})
export default class LazyRoutableDialogComponent {
    protected readonly example1: TuiDocExample = {
        'page.routes.ts': import('./lazy-routable-dialog.routes.ts?raw'),
        'page.template.html': import('./examples/1/index.html?raw'),
        'page.ts': import('./examples/1/index.ts?raw'),
        'dialog.component.ts': import('./examples/1/dialog.component.ts?raw'),
    };
}
