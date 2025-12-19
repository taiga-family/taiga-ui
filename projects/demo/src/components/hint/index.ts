import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TUI_HINT_DIRECTIONS, type TuiHintDirection, TuiTitle} from '@taiga-ui/core';

@Component({
    selector: 'tbody[tuiDocHint]',
    imports: [TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocHint {
    public readonly appearances = ['', 'floating', 'accent'];
    public readonly directions = [
        ...TUI_HINT_DIRECTIONS,
        ['bottom', 'start'] satisfies TuiHintDirection[],
    ];

    public direction = this.directions[0]!;
    public appearance = this.appearances[0]!;

    public readonly hiddenOptions = input<Array<'appearance' | 'direction'>>([]);
}
