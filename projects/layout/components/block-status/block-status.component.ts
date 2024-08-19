import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-block-status',
    templateUrl: './block-status.template.html',
    styleUrls: ['./block-status.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._card]': 'card',
    },
})
export class TuiBlockStatusComponent {
    @Input()
    public card = false;
}
