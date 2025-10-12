import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    template: '',
    styles: '@import "@taiga-ui/core/styles/components/title.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-title'},
})
class Styles {}

@Directive({
    selector: '[tuiTitle]',
    host: {
        tuiTitle: '',
        '[attr.data-size]': 'tuiTitle() || null',
    },
})
export class TuiTitle {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly tuiTitle = input<TuiSizeL | TuiSizeS | ''>('');
}
