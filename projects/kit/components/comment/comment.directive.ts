import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {
    type TuiHorizontalDirection,
    type TuiVerticalDirection,
} from '@taiga-ui/core/types';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/comment.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-comment'},
})
class Styles {}

@Directive({
    selector: '[tuiComment]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {'[attr.data-direction]': 'direction()'},
})
export class TuiComment {
    public readonly direction = input<TuiHorizontalDirection | TuiVerticalDirection | ''>(
        'top',
        {alias: 'tuiComment'},
    );
}
