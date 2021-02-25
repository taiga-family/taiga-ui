import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
} from '@angular/core';
import {NgControl} from '@angular/forms';

@Component({
    selector: 'th[tuiTd], td[tuiTd]',
    templateUrl: './td.template.html',
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTdComponent {
    @HostBinding('class._editable')
    @ContentChild(NgControl)
    readonly control: unknown;
}
