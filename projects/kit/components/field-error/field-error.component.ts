import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

// @dynamic
@Component({
    selector: 'tui-field-error',
    // @bad TODO: find a way to get 'touched' state change
    // https://github.com/angular/angular/issues/10887
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './field-error.template.html',
    styleUrls: ['./field-error.style.less'],
})
export class TuiFieldErrorComponent {
    @Input()
    @tuiDefaultProp()
    order: readonly string[] = [];
}
