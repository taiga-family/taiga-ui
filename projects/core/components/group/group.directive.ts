import {Directive, HostBinding, inject, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {TuiOrientation, TuiSizeL} from '@taiga-ui/core/types';

import {TuiGroupComponent} from './group.component';
import {TUI_GROUP_OPTIONS} from './group.options';

@Directive({
    standalone: true,
    selector: '[tuiGroup]:not(ng-container)',
    host: {
        class: 'tui-group',
        role: 'group',
        '[class.tui-group_orientation_horizontal]': 'orientation === "horizontal"',
        '[class.tui-group_orientation_vertical]': 'orientation === "vertical"',
        '[class.tui-group_radius_large]': 'size === "l"',
    },
})
export class TuiGroupDirective {
    private readonly options = inject(TUI_GROUP_OPTIONS);

    @Input()
    public orientation: TuiOrientation = this.options.orientation;

    @Input()
    @HostBinding('class.tui-group_collapsed')
    public collapsed = this.options.collapsed;

    @Input()
    @HostBinding('class.tui-group_rounded')
    public rounded = this.options.rounded;

    @Input()
    public size: TuiSizeL = this.options.size;

    protected readonly nothing = tuiWithStyles(TuiGroupComponent);
}
