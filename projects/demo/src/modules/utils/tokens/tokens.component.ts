import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DOC_CODE_EDITOR, TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tokens',
    templateUrl: './tokens.template.html',
    providers: [{provide: TUI_DOC_CODE_EDITOR, useValue: null}],
    changeDetection,
})
export class ExampleTokensComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
    };

    readonly example8: TuiDocExample = {
        TypeScript: import('./examples/8/index.ts?raw'),
    };
}
