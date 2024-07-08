import {ChangeDetectionStrategy, Component, ContentChild} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk';
import {AbstractTuiControl} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'th[tuiTd], td[tuiTd]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./td.style.less'],
    host: {
        '[class._editable]': 'current || legacy',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableTd {
    @ContentChild(TuiControl)
    protected readonly current: unknown;

    @ContentChild(AbstractTuiControl)
    protected readonly legacy: unknown;
}
