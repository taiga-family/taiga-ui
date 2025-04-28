import {Directive} from '@angular/core';
import type {PolymorpheusContext} from '@taiga-ui/polymorpheus/classes/context';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiTextfieldItem]',
})
export class TuiTextfieldItem {
    public static ngTemplateContextGuard(
        _dir: TuiTextfieldItem,
        _ctx: unknown,
    ): _ctx is PolymorpheusContext<{
        index: number;
        item: unknown;
    }> {
        return true;
    }
}
