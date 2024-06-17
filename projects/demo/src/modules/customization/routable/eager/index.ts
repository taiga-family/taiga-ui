import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAddonDoc, type TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [RouterOutlet, NgIf, AsyncPipe, TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly example1: TuiDocExample = {
        'page.routes.ts': import('./routes.ts?raw'),
        'page.template.html': import('./examples/1/index.html?raw'),
        'page.ts': import('./examples/1/index.ts?raw'),
        'dialog.component.ts': import('./examples/1/dialog.component.ts?raw'),
    };

    protected readonly example2: TuiDocExample = {
        'page.routes.ts': import('./routes.ts?raw'),
        'page.template.html': import('./examples/2/index.html?raw'),
        'page.ts': import('./examples/2/index.ts?raw'),
        'dialog.component.ts': import('./examples/2/dialog.component.ts?raw'),
    };
}
