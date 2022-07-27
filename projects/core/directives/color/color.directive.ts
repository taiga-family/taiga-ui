import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {tuiDefaultProp, TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TuiColor} from '@taiga-ui/core/types';

import {COLOR} from './color.const';

/**
 * @deprecated use CSS custom properties
 */
@Directive({
    selector: `[tuiColor],[tuiBackground]`,
})
export class TuiColorDirective {
    @Input()
    @HostBinding(`attr.data-tui-color`)
    @tuiDefaultProp()
    tuiColor: TuiColor | string = ``;

    @Input()
    @HostBinding(`attr.data-tui-background`)
    @tuiDefaultProp()
    tuiBackground: TuiColor | string = ``;

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addStyle(COLOR, `TuiColorDirective`);
    }
}
