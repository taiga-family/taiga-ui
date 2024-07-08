import {ChangeDetectionStrategy, Component, ContentChild} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {AbstractTuiControl} from '@taiga-ui/legacy/classes';

@Component({
    standalone: true,
    selector: 'th[tuiTd], td[tuiTd]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._editable]': 'current || legacy',
    },
})
export class TuiTableTd {
    @ContentChild(TuiControl)
    protected readonly current: unknown;

    @ContentChild(AbstractTuiControl)
    protected readonly legacy: unknown;
}
