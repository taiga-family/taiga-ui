import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Vertical',
        'Horizontal',
        'All',
        'Hidden',
        'Light scrollbar',
        'Virtual scroll',
        'Show scroll bars on hover',
        'Native scrollbar',
        'List',
        'Table',
        'Image',
        'CSS',
        'Flexbox',
        'Positioning',
    ];

    constructor() {
        if (typeof document !== 'undefined') {
            const enabled =
                typeof window !== 'undefined' &&
                sessionStorage.getItem('tui-reflow-demo') === '1';

            if (enabled) {
                document.documentElement.setAttribute('data-tui-reflow-demo', '1');
            } else {
                document.documentElement.removeAttribute('data-tui-reflow-demo');
            }
        }
    }
}
