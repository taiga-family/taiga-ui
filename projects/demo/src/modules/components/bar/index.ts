import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import {TuiBarComponent} from '@taiga-ui/addon-charts';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiBarComponent, TuiDemoModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = ['Basic', 'Segments'];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size = this.sizeVariants[1];

    protected readonly valueVariants = [
        [30, 20, 10],
        [237, 50, 10, 5, 1],
    ];

    protected value = this.valueVariants[0];
}
