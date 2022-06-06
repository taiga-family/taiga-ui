import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-browser',
    templateUrl: './browser.template.html',
    changeDetection,
})
export class ExampleBrowserComponent {
    readonly importComponentExample = import(
        '!!raw-loader!./examples/import/import-component.md'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };
}
