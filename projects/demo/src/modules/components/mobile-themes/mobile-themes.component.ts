import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-mobile-themes',
    templateUrl: './mobile-themes.template.html',
    changeDetection,
})
export class ExampleTuiMobileThemesComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };
}
