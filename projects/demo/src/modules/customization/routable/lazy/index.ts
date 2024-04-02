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
    imports: [TuiDocPageModule, TuiDocExampleModule, RouterOutlet, TuiDocCodeModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly example1: TuiDocExample = {
        'page.routes.ts': import('./routes.ts?raw'),
        'page.template.html': import('./examples/1/index.html?raw'),
        'page.ts': import('./examples/1/index.ts?raw'),
        'dialog.component.ts': import('./examples/1/dialog.component.ts?raw'),
    };
}
