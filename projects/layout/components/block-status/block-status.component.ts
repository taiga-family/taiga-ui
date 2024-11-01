import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiSizeL} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-block-status',
    templateUrl: './block-status.template.html',
    styleUrls: ['./block-status.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._card]': 'card',
        '[attr.data-size]': 'size',
    },
})
export class TuiBlockStatusComponent {
    @Input()
    public card = false;

    @Input()
    public size: TuiSizeL = 'l';
}
