import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './floating-container.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-floating-container'},
})
class Styles {}

@Directive({
    selector: '[tuiFloatingContainer]',
    hostDirectives: [TuiAnimated],
    host: {
        tuiFloatingContainer: '',
        '[style.--t-background]': 'background()',
    },
})
export class TuiFloatingContainer {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly background = input('', {alias: 'tuiFloatingContainer'});
}
