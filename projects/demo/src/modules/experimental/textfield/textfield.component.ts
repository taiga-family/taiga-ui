import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-textfield',
    templateUrl: './textfield.template.html',
    changeDetection,
})
export class ExampleTuiTextfieldComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
