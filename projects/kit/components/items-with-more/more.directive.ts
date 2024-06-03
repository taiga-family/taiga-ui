import {Directive} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: '[tuiMore]',
})
export class TuiMoreDirective {
    public static ngTemplateContextGuard(
        _dir: TuiMoreDirective,
        _ctx: unknown,
    ): _ctx is TuiContext<number> {
        return true;
    }
}
