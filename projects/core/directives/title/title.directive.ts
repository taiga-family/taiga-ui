import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/title.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-title',
    },
})
class TuiTitleStyles {}

@Directive({
    standalone: true,
    selector: '[tuiTitle]',
    host: {
        tuiTitle: '',
        '[attr.data-size]': 'size || null',
    },
})
export class TuiTitle {
    protected readonly nothing = tuiWithStyles(TuiTitleStyles);

    @Input('tuiTitle')
    public size: TuiSizeL | TuiSizeS | '' = '';
}
