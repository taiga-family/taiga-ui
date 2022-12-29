import {Directive} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';

@Directive({
    selector: '[tuiMore]',
})
export class TuiMoreDirective {
    static ngTemplateContextGuard(
        _dir: TuiMoreDirective,
        _ctx: unknown,
    ): _ctx is TuiContextWithImplicit<number> {
        return true;
    }
}
