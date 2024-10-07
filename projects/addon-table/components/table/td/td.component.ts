import {ChangeDetectionStrategy, Component, ContentChild} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';

@Component({
    standalone: true,
    selector: 'th[tuiTd], td[tuiTd]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._editable]': 'control',
    },
})
export class TuiTableTd {
    @ContentChild(TuiControl)
    protected readonly control: unknown;
}
