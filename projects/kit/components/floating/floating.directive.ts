import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./floating.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-floating',
    },
})
class TuiFloatingStyles {}

@Directive({
    standalone: true,
    selector: '[tuiFloating]',
    host: {
        tuiFloating: '',
        '[style.--t-background]': 'background',
        '[class._substrate]': 'substrate',
    },
})
export class TuiFloating {
    protected readonly nothing = tuiWithStyles(TuiFloatingStyles);

    protected background = '';
    protected substrate = true;

    @Input()
    public set tuiFloating(color: string) {
        if (color !== 'transparent') {
            this.background = color;
            this.substrate = true;
        } else {
            this.substrate = false;
        }
    }
}
