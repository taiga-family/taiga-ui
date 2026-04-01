import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiLink, type TuiSizeL} from '@taiga-ui/core';
import {TUI_BREADCRUMBS_OPTIONS, TuiBreadcrumbs} from '@taiga-ui/kit';

@Component({
    imports: [TuiBreadcrumbs, TuiDemo, TuiItem, TuiLink],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    private readonly options = inject(TUI_BREADCRUMBS_OPTIONS);

    protected readonly examples = ['Basic', 'Overflow'];
    protected readonly items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
    ];

    protected readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];
    protected size: TuiSizeL = this.options.size;
    protected itemsLimit = this.options.itemsLimit;
}
`;export{i as default};
