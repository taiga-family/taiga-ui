import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
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
})
export class TuiBlockStatusComponent {
    @HostBinding('class._card')
    @Input()
    public card = false;
}
