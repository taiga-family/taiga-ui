import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiAccordionModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemoModule, TuiAccordionModule, TuiLinkDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = [
        'Basic',
        'Custom',
        'Editable',
        'With tuiSortBy directive to work with column titles instead of sorters',
        'Virtual scroll',
        'Dynamic columns',
    ];
}
