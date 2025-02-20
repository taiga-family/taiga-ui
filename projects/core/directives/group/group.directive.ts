import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiOrientation, TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

import {TUI_GROUP_OPTIONS} from './group.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-group',
    },
})
class TuiGroupStyles {}

@Directive({
    standalone: true,
    selector: '[tuiGroup]:not(ng-container)',
    host: {
        tuiGroup: '',
        '[attr.data-orientation]': 'orientation',
        '[attr.data-size]': 'size',
        '[style.--t-group-radius]': 'rounded ? null : 0',
        '[style.--t-group-margin.rem]': 'collapsed ? null : 0.125',
        '[style.--t-group-mask]': 'collapsed ? null : "none"',
        '[style.--t-group-mask-start]': 'collapsed ? null : "none"',
        '[style.--t-group-mask-end]': 'collapsed ? null : "none"',
    },
})
export class TuiGroup {
    private readonly options = inject(TUI_GROUP_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiGroupStyles);

    @Input()
    public orientation: TuiOrientation = this.options.orientation;

    @Input()
    public collapsed = this.options.collapsed;

    @Input()
    public rounded = this.options.rounded;

    @Input()
    public size: TuiSizeL | TuiSizeS = this.options.size;
}
