import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./title.style.less'],
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
export class TuiTitleDirective {
    protected readonly nothing = tuiWithStyles(TuiTitleStyles);

    @Input('tuiTitle')
    public size: TuiSizeL | TuiSizeS | '' = '';
}
