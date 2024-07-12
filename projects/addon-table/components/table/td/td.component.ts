import {ChangeDetectionStrategy, Component, ContentChild} from '@angular/core';
import {AbstractTuiControl} from '@taiga-ui/cdk';

@Component({
    selector: 'th[tuiTd], td[tuiTd]',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._editable]': 'legacy',
    },
})
export class TuiTdComponent {
    @ContentChild(AbstractTuiControl)
    protected readonly legacy: unknown;
}
