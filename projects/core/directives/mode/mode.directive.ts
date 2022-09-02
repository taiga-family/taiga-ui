import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';
import type {TuiBrightness} from '@taiga-ui/core/types';

@Directive({
    selector: `[tuiMode]`,
})
export class TuiModeDirective extends AbstractTuiController {
    @Input(`tuiMode`)
    mode: TuiBrightness | null = null;
}
