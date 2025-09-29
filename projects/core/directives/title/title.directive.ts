import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/title.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-title'},
})
class Styles {}

@Directive({
    selector: '[tuiTitle]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        tuiTitle: '',
        '[attr.data-size]': 'tuiTitle() || null',
    },
})
export class TuiTitle {
    public readonly tuiTitle = input<TuiSizeL | TuiSizeS | ''>('');
}
