import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiOrientation, type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

import {TUI_GROUP_OPTIONS} from './group.options';

@Component({
    template: '',
    styleUrl: './group.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-group'},
})
class Styles {}

@Directive({
    selector: '[tuiGroup]:not(ng-container)',
    host: {
        tuiGroup: '',
        '[attr.data-orientation]': 'orientation()',
        '[attr.data-size]': 'size()',
        '[style.--t-group-radius]': 'rounded() ? null : 0',
        '[style.--t-group-margin.rem]': 'collapsed() ? null : 0.125',
        '[style.--t-group-mask]': 'collapsed() ? null : "none"',
        '[style.--t-group-mask-start]': 'collapsed() ? null : "none"',
        '[style.--t-group-mask-end]': 'collapsed() ? null : "none"',
    },
})
export class TuiGroup {
    private readonly options = inject(TUI_GROUP_OPTIONS);

    protected readonly nothing = tuiWithStyles(Styles);

    public readonly orientation = input<TuiOrientation>(this.options.orientation);

    public readonly collapsed = input(this.options.collapsed);

    public readonly rounded = input(this.options.rounded);

    public readonly size = input<TuiSizeL | TuiSizeS>(this.options.size);
}
