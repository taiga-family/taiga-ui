import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiChip, TuiChipGroup} from '@taiga-ui/kit';

@Component({
    selector: 'example-chip-group',
    imports: [TuiChip, TuiChipGroup, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = ['Basic', 'Single choice', 'Multiple choice', 'Grid'];
    protected readonly chips = ['January', 'February', 'March', 'April'];
    protected readonly columnsVariants: ReadonlyArray<number | null> = [null, 2, 3, 4];
    protected columns: number | null = null;
    protected horizontal = false;
    protected autoscroll = false;
}
