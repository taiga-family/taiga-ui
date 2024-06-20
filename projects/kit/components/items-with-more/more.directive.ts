import {Directive} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';

@Directive({
    standalone: true,
    selector: '[tuiMore]',
})
export class TuiMore {
    public static ngTemplateContextGuard(
        _dir: TuiMore,
        _ctx: unknown,
    ): _ctx is TuiContext<number> {
        return true;
    }
}
