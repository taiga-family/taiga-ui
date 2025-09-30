import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

@Component({
    template: '',
    styleUrls: ['./card.style.less', './large.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-large'},
})
class Styles {}

@Directive({
    selector: '[tuiCardLarge]',
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'space() || "normal"',
    },
})
export class TuiCardLarge {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly space = input<'' | 'compact' | 'normal'>('normal', {
        alias: 'tuiCardLarge',
    });
}
