import {Directive} from '@angular/core';
import {TuiContext} from '@taiga-ui/cdk';

@Directive({
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
