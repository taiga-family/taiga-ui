import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiAccordion, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Basic',
        'Custom',
        'Single',
        'Eager and Lazy',
        'Nested',
        'Connected',
    ];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected size = this.sizeVariants[2]!;
    protected closeOthers = true;
    protected open = false;
}
