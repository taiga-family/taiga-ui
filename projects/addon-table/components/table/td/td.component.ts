import {ChangeDetectionStrategy, Component, contentChild} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';

@Component({
    selector: 'th[tuiTd], td[tuiTd]',
    template: '<ng-content />',
    styleUrl: './td.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._editable]': 'control() || textfield()',
    },
})
export class TuiTableTd {
    protected readonly control = contentChild(TuiControl<unknown>);

    protected readonly textfield = contentChild(TuiTextfieldComponent<unknown>);
}
