import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import {DEFAULT_MAX_HEIGHT, DEFAULT_MIN_HEIGHT} from '@taiga-ui/core/constants';
import {
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core/types';

import {TUI_DROPDOWN_CONTROLLER} from './dropdown-controller.token';

@Directive({
    selector:
        '[tuiDropdownAlign], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownSided]',
    providers: [
        {
            provide: TUI_DROPDOWN_CONTROLLER,
            useExisting: forwardRef(() => TuiDropdownControllerDirective),
        },
    ],
})
export class TuiDropdownControllerDirective extends AbstractTuiController {
    @Input('tuiDropdownAlign')
    @tuiDefaultProp()
    align: TuiHorizontalDirection = 'right';

    @Input('tuiDropdownDirection')
    @tuiDefaultProp()
    direction: TuiVerticalDirection | null = null;

    @Input('tuiDropdownLimitWidth')
    @tuiDefaultProp()
    limitWidth: TuiDropdownWidthT = 'auto';

    @Input('tuiDropdownMinHeight')
    @tuiDefaultProp()
    minHeight = DEFAULT_MIN_HEIGHT;

    @Input('tuiDropdownMaxHeight')
    @tuiDefaultProp()
    maxHeight = DEFAULT_MAX_HEIGHT;

    @Input('tuiDropdownSided')
    @tuiDefaultProp()
    sided = false;
}
