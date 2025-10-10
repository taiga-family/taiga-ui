import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiCarousel} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiCarousel, TuiDemo, TuiRepeatTimes],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Single',
        'Multiple',
        'Custom',
        'Carousel inside dialog',
        'Vertical alignment',
    ];

    protected readonly durationVariants = [0, 3000, 10000];
    protected readonly itemPaddingVariants = [null, '0 10px', '0'];
    protected draggable = false;
    protected duration = this.durationVariants[0]!;
    protected itemPadding: string | null = this.itemPaddingVariants[0]!;
    protected index = 0;
    protected itemsCount = 1;
}
