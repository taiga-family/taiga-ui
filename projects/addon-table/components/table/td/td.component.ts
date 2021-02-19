import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Component({
    selector: 'th[tuiTd], td[tuiTd]',
    templateUrl: './td.template.html',
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTdComponent {
    @Input()
    @HostBinding('class._editable')
    @tuiDefaultProp()
    editable = false;
}
