import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-destroy',
    templateUrl: './destroy.template.html',
    changeDetection,
})
export class ExampleTuiDestroyComponent {
    protected provideService = import('./examples/provide-service.md?raw');
    protected injectService = import('./examples/inject-service.md?raw');

    protected readonly example: TuiDocExample = {
        TypeScript: import('./examples/1/component.ts?raw'),
        HTML: import('./examples/1/template.html?raw'),
    };
}
