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
    styles: ['@import "@taiga-ui/kit/styles/components/pin.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-pin'},
})
class Styles {}

@Directive({
    selector: '[tuiPin]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {'[class._open]': 'open()'},
})
export class TuiPin {
    public readonly open = input<boolean | ''>('', {alias: 'tuiPin'});
}
