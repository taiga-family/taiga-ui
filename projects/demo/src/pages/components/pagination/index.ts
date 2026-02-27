import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiPagination],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected focusable = true;
    protected index = 0;
    protected length = 8;
    protected readonly sizeVariants = ['m', 'l'] as const;
    protected size = this.sizeVariants[1];
    protected activePadding = 1;
    protected sidePadding = 1;

    protected readonly examples = [
        'Basic',
        'Visible pages around active',
        'Visible edge pages',
        'Custom',
    ];
}
