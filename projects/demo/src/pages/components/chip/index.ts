import {Component} from '@angular/core';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeXXS} from '@taiga-ui/core';
import {TuiChip, TuiChipGroup} from '@taiga-ui/kit';

@Component({
    selector: 'example-chip',
    imports: [TuiChip, TuiChipGroup, TuiDemo, TuiDocAppearance, TuiDocIcons],
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

    protected readonly groupExamples = ['Basic', 'Single choice', 'Multiple choice', 'Grid'];
    protected readonly groupChips = ['January', 'February', 'March', 'April'];
    protected readonly columnsVariants: readonly (number | null)[] = [null, 2, 3, 4];
    protected readonly sizes: readonly TuiSizeXXS[] = ['xxs', 'xs', 's', 'm'];

    protected columns: number | null = null;
    protected horizontal = false;
    protected autoscroll = false;
    protected size = this.sizes[2]!;
}
