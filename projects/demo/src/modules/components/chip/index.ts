import {Component} from '@angular/core';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeXXS} from '@taiga-ui/core';
import {TuiChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'example-chip',
    imports: [TuiChip, TuiDemo, TuiDocAppearance, TuiDocIcons],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Basic',
        'Sizes and content',
        'Interactive',
        'Use cases',
        'Auto color',
        'Fade in complex designs',
    ];

    protected readonly sizes: readonly TuiSizeXXS[] = ['xxs', 'xs', 's', 'm'];

    protected size = this.sizes[2]!;
}
