import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiChip, TuiDemo, TuiItemsWithMore],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Basic', 'Dropdown', 'Side', 'Multiline'];
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly requiredVariants = [-1, 2, 4];
    protected readonly itemsLimitVariants = [Infinity, 4, 2];
    protected readonly linesLimitVariants = [1, 2, Infinity];
    protected readonly sideVariants = ['start', 'end'] as const;
    protected side: 'end' | 'start' = this.sideVariants[1];
    protected required = this.requiredVariants[0]!;
    protected itemsLimit = this.itemsLimitVariants[0]!;
    protected linesLimit = this.linesLimitVariants[0]!;
}
