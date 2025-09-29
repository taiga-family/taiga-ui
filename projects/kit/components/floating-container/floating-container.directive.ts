import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./floating-container.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-floating-container'},
})
class Styles {}

@Directive({
    selector: '[tuiFloatingContainer]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        tuiFloatingContainer: '',
        '[style.--t-background]': 'tuiFloatingContainer()',
    },
})
export class TuiFloatingContainer {
    public readonly tuiFloatingContainer = input('');
}
