import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [TuiAccordion, TuiDemo, TuiLink],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Basic',
        'Custom',
        'Editable',
        'Sorting',
        'Virtual scroll',
        'Columns',
        'Footer',
        'Resizing',
        'Expandable rows',
        'Toggle rows',
        'Controls',
    ];
}
`;export{i as default};
