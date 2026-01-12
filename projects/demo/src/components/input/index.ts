import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {type TuiInteractiveState, TuiTitle} from '@taiga-ui/core';

@Component({
    selector: 'tbody[tuiDocInput]',
    imports: [TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocInput {
    protected readonly states: readonly TuiInteractiveState[] = [
        'active',
        'disabled',
        'hover',
    ];

    protected readonly focuses = [true, false];

    public readonly hiddenOptions = input<ReadonlyArray<'focused' | 'state'>>([]);

    public state: TuiInteractiveState | null = null;
    public focused: boolean | null = null;
}
