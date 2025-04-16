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
    styleUrls: ['./floating-container.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-floating',
    },
})
class TuiFloatingContainerStyles {}

@Directive({
    standalone: true,
    selector: '[tuiFloatingContainer]',
    host: {
        tuiFloatingContainer: '',
        '[style.--t-background]': 'background',
        '[class._substrate]': 'substrate',
    },
})
export class TuiFloatingContainer {
    protected readonly nothing = tuiWithStyles(TuiFloatingContainerStyles);

    protected background = '';
    protected substrate = true;

    @Input()
    public set tuiFloatingContainer(color: string) {
        if (color !== 'transparent') {
            this.background = color;
            this.substrate = true;
        } else {
            this.substrate = false;
        }
    }
}
