import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

@Component({
    template: '',
    styleUrls: ['./row.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-row'},
})
class Styles {}

@Directive({
    selector: '[tuiCardRow]',
})
export class TuiCardRow {
    protected readonly nothing = tuiWithStyles(Styles);
}
