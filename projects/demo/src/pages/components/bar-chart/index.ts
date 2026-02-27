import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiBarChart} from '@taiga-ui/addon-charts';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';

@Component({
    imports: [TuiBarChart, TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    public readonly examples = ['With axes', 'Same values with collapsed mode'];

    protected collapsed = false;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size: TuiSizeL | TuiSizeS | null = null;

    protected max = 0;

    protected readonly valueVariants = [
        [
            [30000, 20500, 12345],
            [12422, 16124, 22424],
        ],
        [
            [30, 65, 30, 80, 54],
            [98, 48, 33, 25, 11],
            [55, 10, 27, 36, 73],
        ],
    ];

    protected value = this.valueVariants[0]!;
    protected readonly routes = DemoRoute;
}
