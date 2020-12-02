import {Directive, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiOrientation} from '@taiga-ui/core/enums';
import {TuiSizeL} from '@taiga-ui/core/types';

@Directive({
    selector: '[tuiGroup]:not(ng-container)',
    host: {
        class: 'tui-group',
        role: 'group',
    },
})
export class TuiGroupDirective {
    @Input()
    @tuiDefaultProp()
    orientation: TuiOrientation = TuiOrientation.Horizontal;

    @Input()
    @HostBinding('class.tui-group_adaptive')
    @tuiDefaultProp()
    adaptive = false;

    @Input()
    @HostBinding('class.tui-group_collapsed')
    @tuiDefaultProp()
    collapsed = false;

    @Input()
    @HostBinding('class.tui-group_rounded')
    @tuiDefaultProp()
    rounded = true;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @HostBinding('class.tui-group_orientation_horizontal')
    get orientationHorizontal(): boolean {
        return this.orientation === TuiOrientation.Horizontal;
    }

    @HostBinding('class.tui-group_orientation_vertical')
    get orientationVertical(): boolean {
        return this.orientation === TuiOrientation.Vertical;
    }

    @HostBinding('class.tui-group_radius_large')
    get sizeLarge(): boolean {
        return this.size === 'l';
    }
}
