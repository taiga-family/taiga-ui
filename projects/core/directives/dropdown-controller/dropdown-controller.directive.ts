import {Directive, forwardRef, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {Controller} from '@taiga-ui/core/abstract';
import {DEFAULT_MAX_HEIGHT, DEFAULT_MIN_HEIGHT} from '@taiga-ui/core/constants';
import {TuiDropdownWidth} from '@taiga-ui/core/enums';
import {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core/types';
import {TUI_DROPDOWN_CONTROLLER} from './dropdown-controller.token';

@Directive({
    selector:
        '[tuiDropdownAlign], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight]' +
        '[tuiDropdownMaxHeight], [tuiDropdownSided]',
    providers: [
        {
            provide: TUI_DROPDOWN_CONTROLLER,
            useExisting: forwardRef(() => TuiDropdownControllerDirective),
        },
    ],
})
export class TuiDropdownControllerDirective extends Controller {
    @Input('tuiDropdownAlign')
    @tuiDefaultProp()
    align: TuiHorizontalDirection = 'right';

    @Input('tuiDropdownDirection')
    @tuiDefaultProp()
    direction: TuiVerticalDirection | null = null;

    @Input('tuiDropdownLimitWidth')
    @tuiDefaultProp()
    limitWidth: TuiDropdownWidth = TuiDropdownWidth.Auto;

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
