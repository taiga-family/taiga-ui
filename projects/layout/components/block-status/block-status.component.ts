import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'tui-block-status',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './block-status.template.html',
    styleUrls: ['./block-status.style.less'],
    encapsulation: ViewEncapsulation.None,
})
export class TuiBlockStatusComponent {
    @HostBinding('class._card')
    @Input()
    card = false;
}
