import {
    ChangeDetectionStrategy,
    Component,
    HostAttributeToken,
    inject,
    input,
} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {
    TUI_HINT_DIRECTIONS,
    type TuiHintDirection,
    type TuiHintOptions,
    TuiTitle,
} from '@taiga-ui/core';

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
        ['bottom', 'top'] satisfies TuiHintDirection[],
    ];

    public direction: TuiHintOptions['direction'] =
        (inject(new HostAttributeToken('tuiHintDirection'), {
            optional: true,
        }) as TuiHintDirection | null) ?? this.directions[0]!;

    public appearance = this.appearances[0]!;
    public centered = true;

    public readonly hiddenOptions = input<
        Array<'appearance' | 'centered' | 'direction' | 'directionChange' | 'visible'>
    >([]);
}
