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
        class: 'tui-floating-container',
    },
})
class TuiFloatingContainerStyles {}

@Directive({
    standalone: true,
    selector: '[tuiFloatingContainer]',
    host: {
        tuiFloatingContainer: '',
        '[style.--t-background]': 'background',
    },
})
export class TuiFloatingContainer {
    protected readonly nothing = tuiWithStyles(TuiFloatingContainerStyles);

    protected background = '';

    @Input()
    public set tuiFloatingContainer(color: string) {
        this.background = color;
    }
}
