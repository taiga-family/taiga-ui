import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiRawLoaderContent} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-radio',
    templateUrl: './radio.template.html',
    changeDetection,
})
export class ExampleTuiRadioComponent {
    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );
}
