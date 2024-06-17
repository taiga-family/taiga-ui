import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiAccordion, TuiLinkDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Basic',
        'Custom',
        'Editable',
        'With tuiSortBy directive to work with column titles instead of sorters',
        'Virtual scroll',
        'Dynamic columns',
    ];
}
