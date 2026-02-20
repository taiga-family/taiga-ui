import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiBar} from '@taiga-ui/addon-charts';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';

@Component({
    imports: [TuiBar, TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Basic', 'Segments'];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size = this.sizeVariants[1]!;

    protected readonly valueVariants = [
        [30, 20, 10],
        [237, 50, 10, 5, 1],
    ];

    protected value = this.valueVariants[0]!;
}
`;export{i as default};
