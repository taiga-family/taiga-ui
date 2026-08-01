import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiCounter} from '@taiga-ui/kit';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';

@Component({
    standalone: true,
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

    protected value = 0;
    protected step = 1;
    protected content = '';
    protected disabled = false;
    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['l', 'm', 's'];
    protected size = this.sizeVariants[0]!;
    protected readonly appearanceVariants = ['primary', 'flat', 'secondary'];
    protected appearance = this.appearanceVariants[0]!;
    protected readonly minVariants = [-Infinity, -5, 0];
    protected readonly maxVariants = [0, 5, Infinity];
    protected min = this.minVariants[0]!;
    protected max = this.maxVariants[2]!;
}
