import {ChangeDetectionStrategy, Component, ContentChild} from '@angular/core';
import {AbstractTuiControl, TuiControlDirective} from '@taiga-ui/cdk';

@Component({
    selector: 'th[tuiTd], td[tuiTd]',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._editable]': 'current || legacy',
    },
})
export class TuiTdComponent {
    @ContentChild(TuiControlDirective)
    protected readonly current: unknown;

    @ContentChild(AbstractTuiControl)
    protected readonly legacy: unknown;
}
