import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {tuiDefaultProp, TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TuiOrientationT, TuiSizeL} from '@taiga-ui/core/types';

import {TuiGroupStylesComponent} from './group-styles.component';

@Directive({
    selector: `[tuiGroup]:not(ng-container)`,
    host: {
        class: `tui-group`,
        role: `group`,
    },
})
export class TuiGroupDirective {
    @Input()
    @tuiDefaultProp()
    orientation: TuiOrientationT = `horizontal`;

    @Input()
    @HostBinding(`class.tui-group_adaptive`)
    @tuiDefaultProp()
    adaptive = false;

    @Input()
    @HostBinding(`class.tui-group_collapsed`)
    @tuiDefaultProp()
    collapsed = false;

    @Input()
    @HostBinding(`class.tui-group_rounded`)
    @tuiDefaultProp()
    rounded = true;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeL = `m`;

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiGroupStylesComponent);
    }

    @HostBinding(`class.tui-group_orientation_horizontal`)
    get orientationHorizontal(): boolean {
        return this.orientation === `horizontal`;
    }

    @HostBinding(`class.tui-group_orientation_vertical`)
    get orientationVertical(): boolean {
        return this.orientation === `vertical`;
    }

    @HostBinding(`class.tui-group_radius_large`)
    get sizeLarge(): boolean {
        return this.size === `l`;
    }
}
