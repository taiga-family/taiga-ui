import {Directive, Input} from '@angular/core';
import {TuiController} from '@taiga-ui/cdk';
import {TuiBrightness} from '@taiga-ui/core/types';

@Directive({
    selector: '[tuiMode]',
})
export class TuiModeDirective extends TuiController {
    @Input('tuiMode')
    mode: TuiBrightness | null = null;
}
