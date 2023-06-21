import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'tui-radio-group',
    templateUrl: './radio-group.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRadioGroupComponent {
    private static index = 0;

    @Input()
    name = `tui-radio-group-${TuiRadioGroupComponent.index++}`;
}
