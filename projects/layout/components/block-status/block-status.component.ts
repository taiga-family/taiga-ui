import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiSizeL} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-block-status',
    templateUrl: './block-status.template.html',
    styleUrl: './block-status.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._card]': 'card()',
        '[attr.data-size]': 'size()',
    },
})
export class TuiBlockStatusComponent {
    public readonly card = input(false);

    public readonly size = input<TuiSizeL>('l');
}
