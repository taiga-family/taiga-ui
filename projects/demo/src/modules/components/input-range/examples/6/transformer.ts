import {Directive} from '@angular/core';
import {AbstractTuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_NUMBER_VALUE_TRANSFORMER} from '@taiga-ui/kit';

@Directive({
    selector: `[absTransformer]`,
    providers: [
        {
            provide: TUI_NUMBER_VALUE_TRANSFORMER,
            useExisting: AbsTransformer,
        },
    ],
})
export class AbsTransformer extends AbstractTuiValueTransformer<
    number | null,
    number | null
> {
    override fromControlValue(value: number | null): number | null {
        return value && Math.abs(value);
    }

    override toControlValue(value: number | null): number | null {
        return value && -1 * Math.abs(value);
    }
}
