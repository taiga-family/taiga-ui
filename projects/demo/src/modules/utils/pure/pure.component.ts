import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-pure',
    templateUrl: './pure.template.html',
    changeDetection,
})
export class ExampleTuiPureComponent {
    readonly exampleDecorator = import('./import/example-decorator.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./pure-getter.component.html?raw'),
        TypeScript: import('./pure-getter.component.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./pure-function.component.html?raw'),
        TypeScript: import('./pure-function.component.ts?raw'),
    };
}
