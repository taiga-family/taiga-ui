import {Directive, Input} from '@angular/core';
import {Controller} from '@taiga-ui/core/abstract/controller';
import {TuiBrightness} from '@taiga-ui/core/types';

@Directive({
    selector: '[tuiMode]',
})
export class TuiModeDirective extends Controller {
    @Input('tuiMode')
    mode: TuiBrightness | null = null;
}
