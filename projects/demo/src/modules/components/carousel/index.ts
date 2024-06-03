import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiItemDirective, TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import {TuiCarouselComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiCarouselComponent,
        TuiRepeatTimesDirective,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiItemDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
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
    protected duration = this.durationVariants[0];
    protected itemPadding: string | null = this.itemPaddingVariants[0];
    protected index = 0;
    protected itemsCount = 1;
}
