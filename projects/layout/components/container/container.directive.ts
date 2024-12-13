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
    styleUrls: ['./container.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-container',
    },
})
class TuiContainerStyles {}

@Directive({
    standalone: true,
    selector: '[tuiContainer]',
    host: {
        tuiContainer: '',
        '[attr.data-type]': 'type',
    },
})
export class TuiContainer {
    protected readonly nothing = tuiWithStyles(TuiContainerStyles);

    @Input({alias: 'tuiContainer', required: true})
    public type!: '' | 'adaptive' | 'fixed' | 'fullwidth' | 'menu';
}
