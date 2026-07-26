import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiCounter} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCounter, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Sizes',
        'Appearances',
        'Adjusts font size',
        'Animated',
    ];

    protected readonly value = 0;
    protected readonly step = 1;
    protected readonly content = '';
    protected readonly sizeVariants = ['l', 'm', 's'] as const;
    protected readonly size = this.sizeVariants[0];
    protected readonly appearanceVariants = ['primary', 'flat', 'secondary'] as const;
    protected readonly appearance = this.appearanceVariants[0];
    protected readonly minVariants = [-Infinity, -5, 0] as const;
    protected readonly maxVariants = [0, 5, Infinity] as const;
    protected readonly min = this.minVariants[0];
    protected readonly max = this.maxVariants[2];
}
