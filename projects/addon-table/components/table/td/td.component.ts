import {ChangeDetectionStrategy, Component, ContentChild} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';

@Component({
    standalone: true,
    selector: 'th[tuiTd], td[tuiTd]',
    template: '<ng-content />',
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._editable]': 'control || textfield',
    },
})
export class TuiTableTd {
    @ContentChild(TuiControl)
    protected readonly control: unknown;

    @ContentChild(TuiTextfieldComponent)
    protected readonly textfield?: TuiTextfieldComponent<unknown>;
}
