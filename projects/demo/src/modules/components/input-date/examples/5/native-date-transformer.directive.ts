import {Directive} from '@angular/core';
import {AbstractTuiControlValueTransformer, TuiDay} from '@taiga-ui/cdk';
import {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit';

type From = TuiDay | null;

type To = Date | null;

class ExampleTransformer extends AbstractTuiControlValueTransformer<From, To> {
    toOrigin(transformedValue: To): From {
        return transformedValue && TuiDay.fromLocalNativeDate(transformedValue);
    }

    transformValue(originValue: From): To {
        return originValue && originValue.toLocalNativeDate();
    }
}

@Directive({
    selector: 'tui-input-date[toNativeDate]',
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useValue: new ExampleTransformer(),
        },
    ],
})
export class ExampleNativeDateTransformerDirective {}
