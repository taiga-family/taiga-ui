import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAddonDocModule, type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    selector: 'routable-dialog',
    imports: [RouterOutlet, NgIf, AsyncPipe, TuiAddonDocModule],
    templateUrl: './routable-dialog.template.html',
    changeDetection,
    providers: [TuiDestroyService],
})
export default class RoutableDialogComponent {
    protected readonly example1: TuiDocExample = {
        'page.routes.ts': import('./routable-dialog.routes.ts?raw'),
        'page.template.html': import('./examples/1/index.html?raw'),
        'page.ts': import('./examples/1/index.ts?raw'),
        'dialog.component.ts': import('./examples/1/dialog.component.ts?raw'),
    };

    protected readonly example2: TuiDocExample = {
        'page.routes.ts': import('./routable-dialog.routes.ts?raw'),
        'page.template.html': import('./examples/2/index.html?raw'),
        'page.ts': import('./examples/2/index.ts?raw'),
        'dialog.component.ts': import('./examples/2/dialog.component.ts?raw'),
    };
}
