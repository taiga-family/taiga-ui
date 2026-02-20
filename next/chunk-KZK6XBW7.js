import"./chunk-HU6DUUP4.js";var m=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly exampleImport = import('./examples/import/import.md');

    protected readonly exampleTemplate = import('./examples/import/template.md');

    protected readonly exampleStyle = import('./examples/import/style.md');
}
`;export{m as default};
