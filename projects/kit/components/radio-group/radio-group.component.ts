import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Component({
    selector: `tui-radio-group`,
    templateUrl: `./radio-group.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRadioGroupComponent {
    private static index = 0;

    @Input()
    @tuiDefaultProp()
    name = `tui-radio-group-${TuiRadioGroupComponent.index++}`;
}
