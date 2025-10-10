import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/pin.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-pin'},
})
class Styles {}

@Directive({
    selector: '[tuiPin]',
    host: {
        tuiPin: '',
        '[class._open]': 'open()',
    },
})
export class TuiPin {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly open = input<boolean | ''>('', {alias: 'tuiPin'});
}
