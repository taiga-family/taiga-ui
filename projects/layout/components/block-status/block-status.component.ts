import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'tui-block-status',
    templateUrl: './block-status.template.html',
    styleUrls: ['./block-status.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiBlockStatusComponent {
    @HostBinding('class._card')
    @Input()
    card = false;
}
